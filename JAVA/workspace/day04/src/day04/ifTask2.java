package day04;

import java.util.Scanner;

public class ifTask2 {
	public static void main(String[] args) {
		
		int age = 0;
	    String msg1 = "나이를 입력하세요 : ", result = null;
	      Scanner sc = new Scanner(System.in);
	      
	      System.out.println(msg1);
	      age = sc.nextInt();
	      
	      if (19<age) {
	    	  result = "성인입니다";
	      } else if (14<age) {
	    	  result = "청소년 입니다";
	      } else if (6<age) {
	    	  result = "어린이 입니다";
	      } else {
	    	  result = "유아 입니다";
	      }
	      
	      System.out.println(result);
	}

}
