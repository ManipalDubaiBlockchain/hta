pragma solidity ^0.4.18;

contract HTAContract {
    // title & status
    string studentName;
    string status;   // INITIATED, REGISTERED, ATTENDANCE CLEARED, APPROVED
    bool payFlag;
    bool approvalFlag;
    uint fees;  


    // constructor
    //function ContractLG(string _title, string _status, string _commdate, string _tenure, string _warranty, string _eyaddress, string _partyaddress, string _contdesc) public {
    function HTAContract() public {
        studentName = "Subir Ghosh";
        status = "INITIATED";
        payFlag = false;
        approvalFlag = false;
        fees = 0;
    }

    // view contract
    function viewHTAContract() public view returns (string, string, bool, bool, uint) {
        return (studentName, status, payFlag, approvalFlag, fees);
    }

    //view approval for student
    function viewAproval() public view returns (bool) {
        if (payFlag == true && approvalFlag == true) {
            return true;
        }
        else {
            return false;
        }
    }

    // set payment flag
    function setPayFlag(bool pPayFlag, uint pFees) public {
        payFlag = pPayFlag;
        fees = pFees;
    }

    // set approval flag
    function setApprovalFlag(bool pApprovalFlag) public {
        approvalFlag = pApprovalFlag;
    }
}