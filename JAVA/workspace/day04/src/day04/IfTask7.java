package day04;

import java.util.Scanner;

public class IfTask7 {
   public static void main(String[] args) {
      //  ���� x, y��ǥ�� ���� 1~4��и� ���ϱ�
      
      Scanner sc = new Scanner(System.in);
      System.out.println("x��ǥ�� �Է��Ͻÿ�");
      int x = sc.nextInt();
      System.out.println("y��ǥ�� �Է��Ͻÿ�");
      int y = sc.nextInt();
      System.out.println("��ǥ("+x+","+y+")");
      
      if(x>0 && y>0) {
         System.out.println("�� 1��и�");
      }
      else if(x<0 && y>0) {
         System.out.println("�� 2��и�");
      }
      else if(x<0 && y<0) {
         System.out.println("�� 3��и�");
      }
      else if(x>0 && y<0){
         System.out.println("�� 4��и�");
      }
      
   }
}