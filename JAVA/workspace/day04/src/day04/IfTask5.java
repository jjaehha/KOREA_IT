package day04;

import java.util.Scanner;

public class IfTask5 {
	public static void main(String[] args) {
		
		String  msg1 = "���������� �Է��ϼ���: ", msg2 = "���������� �Է��ϼ���: ",
				msg3 = "���������� �Է��ϼ���: ", msg4 = "���������� �Է��ϼ���: ",
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
	    	  result = "���հ�";
	      } else {
	    	  result = "�հ�";
	      }
	      
	      System.out.println(result);
	}
}
