package day04;

import java.util.Scanner;

public class SwitchTask1 {
	public static void main(String[] args) {
	      String msg = "����� mbti��?\n"
	              		+ "1.ISFJ\n"
	              		+ "2.INFJ\n"
	              		+ "3.ESFP\n"
	              		+ "4.ENTJ\n"
	              		+ "���� : ";
	        String isfj = "�����ϰ� �γ����� ���ϴ�.",
	        	   infj = "�������� ���� ����鿡�� ������ �ش�.",
	               esfp = "ȣ����� ���� �������̴�.",
	               entj = "ö���� �غ��ϰ� Ȱ�����̴�",
	               errMsg = "�߸� �Է��ϼ̽��ϴ�.";
	        
	        Scanner sc = new Scanner(System.in);
	        String result = null;
	        int choice =0;
	        
	        System.out.println(msg);
	        choice = sc.nextInt();
	        
	        switch(choice) {
	        case 1:
	        	result = isfj;
	        	break;
	        case 2:
	        	result = infj;
	        	break;
	        case 3:
	        	result = esfp;
	        	break;
	        case 4:
	        	result = entj;
	        	break;
	        default:
	        	result = errMsg;
	        	break;
	        }
	        System.out.println(result);
	}

}
