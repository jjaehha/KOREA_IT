package day02;

import java.util.Scanner;

public class InputTask4 {
   public static void main(String[] args) {
      /*
       * �����ϴ� ���� , �����ϴ� ������ �Է¹޾� ����ϱ�
       * 
       * ��¿���
       * ���� �����ϴ� ���ڴ� 13�̰�, ���� �����ϴ� ������ ��������.
       * printf()�� ����ؼ� ���
       */
      String msg1 = "�����ϴ� ���� : ", msg2 ="�����ϴ� ���� : ", animal =null;
      int num = 0;
      
      Scanner sc = new Scanner(System.in);
      System.out.println(msg1);
      num = sc.nextInt();
      sc.nextLine();
      System.out.println(msg2);
      animal = sc.nextLine();
      
      System.out.printf("���� �����ϴ� ���ڴ� %d�̰�, ���� �����ϴ� ������ %s��.",num,animal);
      
      
   }
}