package day04;

import java.util.Scanner;

public class IfTask5 {
	public static void main(String[] args) {
		
		String  msg1 = "국어점수를 입력하세요: ", msg2 = "영어점수를 입력하세요: ",
				msg3 = "수학점수를 입력하세요: ", msg4 = "과학점수를 입력하세요: ",
				result = "";
		
		int kor = 0, en = 0, math=0, sic=0;
		
		double grade = 0.0;
		
	      Scanner sc = new Scanner(System.in);

	      System.out.println(msg1);
	      kor = sc.nextInt();
	      
	      System.out.println(msg2);
	      en = sc.nextInt();
	      
	      System.out.println(msg3);
	      math = sc.nextInt();
	      
	      System.out.println(msg4);
	      sic = sc.nextInt();
	      
	      
	      if (kor < 60 || en < 60 || math < 60 || sic < 60) {
	    	  result = "불합격";
	      } else {
	    	  result = "합격";
	      }
	      
	      System.out.println(result);
	}
}
