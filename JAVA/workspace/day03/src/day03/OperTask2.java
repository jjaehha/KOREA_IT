package day03;

import java.util.Scanner;

public class OperTask2 {
	public static void main(String[] args) {


		String msg = "����� mbti��?\n" +
					 "1.ISFJ\n" +
					 "2.INFJ\n" +
					 "3.ESFP\n" +
					 "4.ENTJ\n" +
					 "���� : ";
		
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
	    result = choice ==1 ? isfj :
	             choice ==2 ? infj :
	             choice ==3 ? esfp :
	             choice == 4? entj : errMsg;
	      
	      
	      System.out.println(result);

	}
}
