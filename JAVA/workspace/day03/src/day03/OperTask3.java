package day03;

import java.util.Scanner;

public class OperTask3 {
	public static void main(String[] args) {
		
		String  msg1 = "국어점수를 입력하세요: ",
				msg2 = "영어점수를 입력하세요: ", msg3 = "수학점수를 입력하세요: ",
				
				msg4 = "평균이", msg5 = "점으로 합격입니다", msg6 = "점으로 불합격입니다";
		
		int kor = 0, en = 0, math=0, add=0;
		
		double grade = 0.0;
		
	      Scanner sc = new Scanner(System.in);

	      System.out.println(msg2);
	      kor = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg3);
	      en = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg4);
	      math = sc.nextInt();
	      sc.nextLine();
	      
	      add = kor + en + math;
	      
	      grade = (kor + en + math) / 3;
	      
	      System.out.println(grade >= 60 ? msg4 + grade + msg5 : msg4 + grade + msg6);
	}
}
