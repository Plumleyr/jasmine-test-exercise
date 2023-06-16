describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should clear serverNameInput on submitServerInfo()',function(){
    submitServerInfo();

    expect(serverNameInput.innerHTML).toBe('');
  })

  it('should append a new tr to the serverTbody on updateServerTable()', function(){
    allServers = {server1: {serverName: 'Alice'}}
    updateServerTable();
    expect(document.getElementById('server1')).not.toBeNull();
  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
