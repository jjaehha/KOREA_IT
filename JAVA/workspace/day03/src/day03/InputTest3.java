package day03;

import java.util.Scanner;

public class InputTest3 {
	public static void main(String[] args) {
		
		String msg1 = "이름을 입력하세요:", msg2 = "국어점수를 입력하세요: ",
				msg3 = "영어점수를 입력하세요: ", msg4 = "수학점수를 입력하세요: ",
				name = "";
		
		int kor = 0, en = 0, math=0, add=0;
		
		double grade = 0.0;
		
	      Scanner sc = new Scanner(System.in);
	      System.out.println(msg1);
	      name = sc.nextLine();

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
	      
	      System.out.println("이름: " + name);
	      System.out.println("총점: " + add);
	      System.out.println("평균: " + grade);
		
		
	}

}
