import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoUnit from 'mongo-unit';
import { version, name } from '../package.json';

const should = chai.should();
chai.use(chaiHttp);

describe('[API] Healthcheck', () => {
  afterEach(() => mongoUnit.drop());

  it('Create healthcheck', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        should.exist(res.body);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message').equal('ok');
        res.body.should.have.property('version').equal(version);
        res.body.should.have.property('name').equal(name);
        done();
      });
  });
});
