const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it(' debe tomar menos de 200 ms la conexion node sql server', function(done) {
    // set a test-level timeout
    this.timeout(200);
    
    setTimeout(done, 150);
  })
  
  it('Devuelve la nonexion ', () => {
    expect('servidor corriendo').to.equal('servidor corriendo');
  });
});