package day04;

import java.util.Scanner;

public class IfTask6 {
	public static void main(String[] args) {
		
		String day1 = "��", day2 = "ȭ", day3 = "��", day4 = "��", day5 = "��",
			   msg1 = "������ȣ�� �Է��ϼ���", result = "";
		
		int lastnum = 0, carnum = 0;
		
		Scanner sc = new Scanner(System.in);
	    
		System.out.println(msg1);
	    carnum = sc.nextInt();
	    
	    lastnum = carnum%10;
	    
	    if (lastnum == 1 || lastnum ==6) {
	    	result = "������";
	    } else if (lastnum==2 || lastnum==7) {
	    	result = "ȭ����";
	    } else if (lastnum==3 || lastnum==8) {
	    	result = "������";
	    } else if (lastnum==4 || lastnum==9) {
	    	result = "�����";
	    } else if (lastnum==5 || lastnum==0) {
	    	result = "�ݿ���";
	    }
		
	    System.out.println(result);
	}
}
