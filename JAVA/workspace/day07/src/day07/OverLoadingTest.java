package day07;


public class OverLoadingTest {
   public static void main(String[] args) {
      OverLoadingTest ov = new OverLoadingTest();
      int a = ov.sum(10);
      int b = ov.sum(10,20);
      int c = ov.sum(10,20,30);
      System.out.println(a);
      System.out.println(b);
      System.out.println(c);
      
   }
   int sum(int num1, int num2) {
      return num1+num2;
   }
   int sum(int num1, int num2, int num3) {
      return num1+num2+num3;
   }
   int sum(int num1) {
      return num1+10;
   }
}
   
