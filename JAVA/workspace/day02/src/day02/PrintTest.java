package day02;

public class PrintTest {
	public static void main(String[] args) {
		System.out.print("�ȳ�\n");
		System.out.print("�ϼ���\n");
		
		String name = "������";
		System.out.println("���̸��� name�Դϴ�");
		System.out.printf("���̸��� %s �Դϴ�", name);
		System.out.println();
		
		// printf
		
		System.out.printf("�� ��ǻ�������� %010d���Դϴ�\n", 100);
		System.out.printf("�� ��������� %.2f�� �Դϴ�\n", 88.1234);
		System.out.printf("�� ������ %c �Դϴ�\n",'A');
		
		
//		���� �Ѱ�	
		String price1 = "500��";
		String price2 = "1500��";
		String price3 = "2000��";
		System.out.print("=====������=====\n");
		System.out.printf("��� %10s\n", price1);
		System.out.printf("���� %10s\n", price2);
		System.out.printf("�ٳ��� %9s\n", price3);
		System.out.print("==============\n");
		
		
		String fruit1 = "����";
		String fruit2 = "���";
		String fruit3 = "�ٳ���";
		System.out.println("========������========");
		System.out.printf("%s\t\t%5s\n",fruit1,price1);
		System.out.printf("%s\t\t%5s\n",fruit2,price2);
		System.out.printf("%s\t\t%5s\n",fruit3,price3);
		
		
	}

}
