package day04;

import java.util.Scanner;

public class IfTask3 {
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
	      String result = null;
	      int choice =0;
	      
	      Scanner sc = new Scanner(System.in);
	      System.out.println(msg);
	      choice = sc.nextInt();
	      
	      if(choice == 1) {
	          result = isfj;
	      } else if(choice ==2) {
	         result = infj;
	      } else if(choice ==3) {
	         result = esfp;
	      } else if(choice ==4 ) {
	         result = entj;
	      } else {
	         result =errMsg;
	      }
	      
	      System.out.println(result);

	      
	      
	}
}
