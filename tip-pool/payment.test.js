describe(("helpers test (with setup and tear-down"), function(){
    
    beforeEach(function(){
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    })

    it('create a payment object on createCurPayment()', function(){
        expect(createCurPayment()).toEqual({
            billAmt:'50',
            tipAmt:'5',
            tipPercent: 10
        })
    })

    it("should update the summary td's innerHTML on updateSummary()",function(){
         allPayments = {payment1: {billAmt: '50', tipAmt: '5', tipPercent: 10}}
        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual('$50')
        expect(summaryTds[1].innerHTML).toEqual('$5')
        expect(summaryTds[2].innerHTML).toEqual('10%')
    })

    it('should append a new tr with td elements from the current payment on appendPaymentTable()', function(){
        paymentId = 1;
        curPayment ={billAmt: '50', tipAmt: '5', tipPercent: 10}

        appendPaymentTable(curPayment);
        expect(document.getElementById('payment1')).not.toBeNull();
    })

    it('should add a payment to allPayments on submitPaymentInfo()', function(){
        submitPaymentInfo();
        expect(allPayments).toEqual({payment1: {billAmt: '50', tipAmt: '5', tipPercent: 10}})
    })
    
    afterEach(function(){
        paymentTbody.innerHTML = '';
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
})