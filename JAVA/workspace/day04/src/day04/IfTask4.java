package day04;

import java.util.Scanner;

public class IfTask4 {
	public static void main(String[] args) {
		String  msg1 = "국어점수를 입력하세요: ",
				msg2 = "영어점수를 입력하세요: ", msg3 = "수학점수를 입력하세요: ",
				result = "";
		
		int kor = 0, en = 0, math=0, add=0;
		
		double grade = 0.0;
		
	      Scanner sc = new Scanner(System.in);

	      System.out.println(msg1);
	      kor = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg2);
	      en = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg3);
	      math = sc.nextInt();
	      sc.nextLine();
	      
	      add = kor + en + math;
	      grade = (kor + en + math) / 3;
	      
	      if (90 <= grade) {
	    	  result = grade + "점으로 학점은 A 입니다";
	      } else if (80 <= grade) {
	    	  result = grade + "점으로 학점은 B 입니다";
	      } else if (70 <= grade) {
	    	  result = grade + "점으로 학점은 C 입니다";
	      } else if (60 <= grade) {
	    	  result = grade + "점으로 학점은 D 입니다";
	      } else {
	    	  result = grade + "점으로 학점은 F 입니다";
	      }
	      
	      System.out.println(result);
	}

}
