package day04;

import java.util.Scanner;

public class ifTask2 {
	public static void main(String[] args) {
		
		int age = 0;
	    String msg1 = "���̸� �Է��ϼ��� : ", result = null;
	      Scanner sc = new Scanner(System.in);
	      
	      System.out.println(msg1);
	      age = sc.nextInt();
	      
	      if (19<age) {
	    	  result = "�����Դϴ�";
	      } else if (14<age) {
	    	  result = "û�ҳ� �Դϴ�";
	      } else if (6<age) {
	    	  result = "��� �Դϴ�";
	      } else {
	    	  result = "���� �Դϴ�";
	      }
	      
	      System.out.println(result);
	}

}
