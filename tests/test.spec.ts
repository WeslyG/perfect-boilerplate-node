import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoUnit from 'mongo-unit';

const should = chai.should();
chai.use(chaiHttp);

describe('[API] Test link', () => {
  afterEach(() => mongoUnit.drop());

  it('Test', done => {
    chai
      .request(app)
      .get('/test')
      .end((err, res) => {
        should.exist(res.body);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name').equal('Name for all answer is 42');
        done();
      });
  });
});
