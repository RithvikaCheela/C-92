player1_score=0;
player2_score=0;
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+ player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word is " + word);

    charAt1=word.charAt(1);
    lenby2=Math.floor(word.length/2);
    charAt2=word.charAt(lenby2);
    lenminus1=word.length-1;
    charAt3=word.charAt(lenminus1);

    word1=word.replace(charAt1,"_");
    word2=word1.replace(charAt2,"_");
    word3=word2.replace(charAt3,"_");

    question_word="<h4 id='word_display'> Q."+word3 + "</h4>";
    input_box="<br><br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><br><button class='btn btn-info' onclick='check()'> Check </button>";

    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="p1";
answer_turn="p2";

function check(){
   get_ans=document.getElementById("input_check_box").value;
   answer=get_ans.toLowerCase();
   console.log("answer is " + answer );
    if (answer == word){
        if(answer_turn == "p1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

    }
    if(question_turn == "p1"){
        question_turn ="p2";
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
    }
    else{
        question_turn= "p1";
        document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;
    }

    if(answer_turn == "p1"){
        answer_turn= "p2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;
    }
    else{
        answer_turn= "p1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML="";
}
