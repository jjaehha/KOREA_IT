package day04;

import java.util.Scanner;

public class SwitchTask3 {
	public static void main(String[] args) {
        
		Scanner sc = new Scanner(System.in);
        String result = null;
        
        System.out.println("���� �Է��ϼ���");
        int month = sc.nextInt();
        
        switch(month) {
        case 3,4,5:
        	result = month + "���� ���Դϴ�";
        	break;
        case 6,7,8:
        	result = month + "���� �����Դϴ�";
        	break;
        case 9,10,11:
        	result = month + "���� �����Դϴ�";
        	break;
        case 12,1,2:
        	result = month + "���� �ܿ��Դϴ�";
        	break;
        }
        System.out.println(result);
	}
}
