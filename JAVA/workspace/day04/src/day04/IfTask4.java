package day04;

import java.util.Scanner;

public class IfTask4 {
	public static void main(String[] args) {
		String  msg1 = "���������� �Է��ϼ���: ",
				msg2 = "���������� �Է��ϼ���: ", msg3 = "���������� �Է��ϼ���: ",
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
	    	  result = grade + "������ ������ A �Դϴ�";
	      } else if (80 <= grade) {
	    	  result = grade + "������ ������ B �Դϴ�";
	      } else if (70 <= grade) {
	    	  result = grade + "������ ������ C �Դϴ�";
	      } else if (60 <= grade) {
	    	  result = grade + "������ ������ D �Դϴ�";
	      } else {
	    	  result = grade + "������ ������ F �Դϴ�";
	      }
	      
	      System.out.println(result);
	}

}
