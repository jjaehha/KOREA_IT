package day04;

import java.util.Scanner;

public class IfTask {
	public static void main(String[] args) {
		int num1 = 0, num2=0;
	      String result = null;
	      Scanner sc = new Scanner(System.in);
	      String msg1 = "첫번째 정수 : ";
	      String msg2 = "두번째 정수 : ";
	      
	      System.out.println(msg1);
	      num1 = sc.nextInt();
	      System.out.println(msg2);
	      num2 = sc.nextInt();
	      
	      if(num1>num2) {
	    	  result = "큰 수:" + num1;
	      }
	      else if(num1<num2) {
	    	  result = "큰 수:" + num2;
	      }
	      else {
	    	  result = "같습니다";
	      }
	      System.out.println(result);
	}
	   
}
