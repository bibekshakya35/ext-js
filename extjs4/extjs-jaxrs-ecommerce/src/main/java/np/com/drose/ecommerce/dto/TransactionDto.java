/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package np.com.drose.ecommerce.dto;

/**
 *
 * @author Bibek Shakya
 */
public class TransactionDto {

    private int tranId1;
    private int tranId2;
    private int tranId3;

    public int getTranId1() {
        return tranId1;
    }

    public void setTranId1(int tranId1) {
        this.tranId1 = tranId1;
    }

    public int getTranId2() {
        return tranId2;
    }

    public void setTranId2(int tranId2) {
        this.tranId2 = tranId2;
    }

    public int getTranId3() {
        return tranId3;
    }

    public void setTranId3(int tranId3) {
        this.tranId3 = tranId3;
    }

    public TransactionDto(int tranId1, int tranId2, int tranId3) {
        this.tranId1 = tranId1;
        this.tranId2 = tranId2;
        this.tranId3 = tranId3;
    }

}
