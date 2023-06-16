describe(("helpers test (with setup and tear-down"), function(){
    
    beforeEach(function(){
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    })

    it('should create a tipPercent on calculateTipPercent()', function(){
        billAmt = billAmtInput.value;
        tipAmt = tipAmtInput.value;
        expect(calculateTipPercent(billAmt,tipAmt)).toBe(10)
    })

    it('should append a new td to a tr on appendTd()', function(){
        let newTr = document.createElement('tr');
        newTr.id = 'testTr'
        billAmt = billAmtInput.value;
        appendTd(newTr, billAmt)
        paymentTbody.append(newTr);
        expect(document.getElementById('testTr')).not.toBeNull();

    })

    it('should return a total equal to the payment type on sumPaymentTotal()', function(){
        let billAmt = billAmtInput.value;
        let tipAmt = tipAmtInput.value;
        allPayments = 
            {payment1:{
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt,tipAmt)
            },
            payment2:{
            billAmt: 100,
            tipAmt: 20,
            tipPercent: calculateTipPercent(100,20)
            }
        }
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(25);
        expect(sumPaymentTotal('tipPercent')).toEqual(30);

    })

    it('should add a delete button to the end of the table row on appendDeleteBtn()', function(){
        allServers = {server1: {serverName: 'Alice'}}
        updateServerTable();
        let serverTd = document.querySelectorAll('#serverTable tbody tr td');

        expect(serverTd[2].innerText).toEqual('X');
    })

    afterEach(function(){
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
    })
})