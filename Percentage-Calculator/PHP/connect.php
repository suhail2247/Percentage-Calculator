<?php
    $Uni_Reg=$_POST['UniversityCollegeName']+$_POST['RegistrationNumber'];
    $Branch=$_POST['Branch'];
    $CollegeYear=$_POST['CollegeYear'];
    $English_M=$_POST['English_M'];
    $English_O=$_POST['English_O'];
    $Hindi_M=$_POST['Hindi_M'];
    $Hindi_O=$_POST['Hindi_O'];
    $Calculus_M=$_POST['Calculus_M'];
    $Calculus_O=$_POST['Calculus_O'];
    $Programming_M=$_POST['Programming_M'];
    $Programming_O=$_POST['Programming_O'];
    $Economics_M=$_POST['Economics_M'];
    $Economics_O=$_POST['Economics_O'];
    $Chemistry_M=$_POST['Chemistry_M'];
    $Chemistry_O=$_POST['Chemistry_O'];
    $Algebra_M=$_POST['Algebra_M'];
    $Algebra_O=$_POST['Algebra_O'];
    $Physics_M=$_POST['Physics_M'];
    $Physics_O=$_POST['Physics_O'];
    $Analysis_M=$_POST['Analysis_M'];
    $Analysis_O=$_POST['Analysis_O'];
    $Graphics_M=$_POST['Graphics_M'];
    $Graphics_O=$_POST['Graphics_O'];
    $Environmental_M=$_POST['Environmental_M'];
    $Environmental_O=$_POST['Environmental_O'];
    $Automata_M=$_POST['Automata_M'];
    $Automata_O=$_POST['Automata_O'];
    $DesignAlgo_M=$_POST['DesignAlgo_M'];
    $DesignAlgo_O=$_POST['DesignAlgo_O'];
    $DataStructure_M=$_POST['DataStructure_M'];
    $DataStructure_O=$_POST['DataStructure_O'];
    $Psychology_M=$_POST['Psychology_M'];
    $Psychology_O=$_POST['Psychology_O'];
    $AI_M=$_POST['AI_M'];
    $AI_O=$_POST['AI_O'];
    $Architecture_M=$_POST['Architecture_M'];
    $Architecture_O=$_POST['Architecture_O'];
    $OS_M=$_POST['OS_M'];
    $OS_O=$_POST['OS_O'];
    $Networks_M=$_POST['Networks_M'];
    $Networks_O=$_POST['Networks_O'];
    $ProgrammingLang_M=$_POST['ProgrammingLang_M'];
    $ProgrammingLang_O=$_POST['ProgrammingLang_O'];
    $Database_M=$_POST['Database_M'];
    $Database_O=$_POST['Database_O'];
    $TotalMarksObtain=$_POST['TotalMarksObtain'];
    $TotalOutOfMarks=$_POST['TotalOutOfMarks'];
    $PercentageResult=$_POST['PercentageResult'];


    $conn=new mysqli('localhost','root','','calculator_database');
    /*if($conn->connect_error){
        die('Connection Failed :'.$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into usertable(Uni_Reg,Branch,CollegeYear,English_M,English_O,Hindi_M,Hindi_O,Calculus_M,Calculus_O,
        Programming_M,Programming_O,Economics_M,Economics_O,Chemistry_M,Chemistry_O,Algebra_M,Algebra_O,Physics_M,Physics_O,Analysis_M,Analysis_O,
        Graphics_M,Graphics_O,Environmental_M,Environmental_O,Automata_M,Automata_O,DesignAlgo_M,DesignAlgo_O,DataStructure_M,DataStructure_O,
        Psychology_M,Psychology_O,AI_M,AI_O,Architecture_M,Architecture_O,OS_M,OS_O,Networks_M,Networks_O,ProgrammingLang_M,ProgrammingLang_O,
        Database_M,Database_O,TotalMarksObtain,TotalOutOfMarks,PercentageResult) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        
        $stmt->bind_param("sssiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiid",$Uni_Reg,$Branch,$CollegeYear,$English_M,$English_O,$Hindi_M,$Hindi_O,$Calculus_M,$Calculus_O,
        $Programming_M,$Programming_O,$Economics_M,$Economics_O,$Chemistry_M,$Chemistry_O,$Algebra_M,$Algebra_O,$Physics_M,$Physics_O,$Analysis_M,$Analysis_O,
        $Graphics_M,$Graphics_O,$Environmental_M,$Environmental_O,$Automata_M,$Automata_O,$DesignAlgo_M,$DesignAlgo_O,$DataStructure_M,$DataStructure_O,
        $Psychology_M,$Psychology_O,$AI_M,$AI_O,$Architecture_M,$Architecture_O,$OS_M,$OS_O,$Networks_M,$Networks_O,$ProgrammingLang_M,$ProgrammingLang_O,
        $Database_M,$Database_O,$TotalMarksObtain,$TotalOutOfMarks,$PercentageResult);

        $stmt->execute();
        echo "Succesfully Uploaded";
        $stmt->close();
        $conn->close();
    } */
    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno(). ')'. mysqli_connect_error());
    } else{
        $SELECT = "SELECT Uni_Reg from usertable where Uni_Reg = ? Limit=1";
        $INSERT = "INSERT Into usertable(Uni_Reg,Branch,CollegeYear,English_M,English_O,Hindi_M,Hindi_O,Calculus_M,Calculus_O,
        Programming_M,Programming_O,Economics_M,Economics_O,Chemistry_M,Chemistry_O,Algebra_M,Algebra_O,Physics_M,Physics_O,Analysis_M,Analysis_O,
        Graphics_M,Graphics_O,Environmental_M,Environmental_O,Automata_M,Automata_O,DesignAlgo_M,DesignAlgo_O,DataStructure_M,DataStructure_O,
        Psychology_M,Psychology_O,AI_M,AI_O,Architecture_M,Architecture_O,OS_M,OS_O,Networks_M,Networks_O,ProgrammingLang_M,ProgrammingLang_O,
        Database_M,Database_O,TotalMarksObtain,TotalOutOfMarks,PercentageResult) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
        $stmt=$conn->prepare($SELECT);
        $stmt->bind_param("s",$Uni_Reg);
        $stmt->execute();
        $stmt->bind_result($Uni_Reg);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum == 0){
            $stmt->close();
            $stmt= $conn->prepare($INSERT);
            $stmt->bind_param("sssiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiid",$Uni_Reg,$Branch,$CollegeYear,$English_M,$English_O,$Hindi_M,$Hindi_O,$Calculus_M,$Calculus_O,
        $Programming_M,$Programming_O,$Economics_M,$Economics_O,$Chemistry_M,$Chemistry_O,$Algebra_M,$Algebra_O,$Physics_M,$Physics_O,$Analysis_M,$Analysis_O,
        $Graphics_M,$Graphics_O,$Environmental_M,$Environmental_O,$Automata_M,$Automata_O,$DesignAlgo_M,$DesignAlgo_O,$DataStructure_M,$DataStructure_O,
        $Psychology_M,$Psychology_O,$AI_M,$AI_O,$Architecture_M,$Architecture_O,$OS_M,$OS_O,$Networks_M,$Networks_O,$ProgrammingLang_M,$ProgrammingLang_O,
        $Database_M,$Database_O,$TotalMarksObtain,$TotalOutOfMarks,$PercentageResult);
        $stmt->execute();
        echo "New Recored Entered Succesfully";
    }else{
        echo "Someone already registerd from the University/College With Same Registration Number";
    }
    $stmt->close();
    $conn->close();
    }
?>