package day04;

import java.util.Scanner;

public class IfTask {
	public static void main(String[] args) {
		int num1 = 0, num2=0;
	      String result = null;
	      Scanner sc = new Scanner(System.in);
	      String msg1 = "ù��° ���� : ";
	      String msg2 = "�ι�° ���� : ";
	      
	      System.out.println(msg1);
	      num1 = sc.nextInt();
	      System.out.println(msg2);
	      num2 = sc.nextInt();
	      
	      if(num1>num2) {
	    	  result = "ū ��:" + num1;
	      }
	      else if(num1<num2) {
	    	  result = "ū ��:" + num2;
	      }
	      else {
	    	  result = "�����ϴ�";
	      }
	      System.out.println(result);
	}
	   
}
