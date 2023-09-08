package day07;

import java.util.Scanner;

class Tv {
	int ch;
	int vol;
	boolean power;
	int inch;
	int price;
	String color;

	public Tv() {
	}

	public Tv(int inch, int price, String color) {
		this.inch = inch;
		this.price = price;
		this.color = color;
	}

	public Tv(int inch, int price, int ch) {
		this.inch = inch;
		this.price = price;
		this.ch = ch;
	}

	void powerOnOff() {
	}

	void ChUp() {
	}

	void ChDown() {
	}

}

class Tv3 {
	String color;
	int inch;
	int price;
	boolean power; // on : true off: false
	int channel;

	public Tv3(String color, int inch, int price, int channel) {
		this.color = color;
		this.inch = inch;
		this.price = price;
		this.channel = channel;
	}

	void powerOnOff() {
		power = !power;
	}

	int channelUp() {
		return ++channel;
	}

	int channelDown() {
		return --channel;
	}

}

public class TvTest {
	public static void main(String[] args) {
		String msg = "1.  ������ư\n" + "2. ä�� �ø���\n" + "3. ä�� ������\n" + "�Է� >> ";
		Scanner sc = new Scanner(System.in);
		Tv3 tv = new Tv3("White", 25, 8000000, 5);
		int choice = 0;

		while (true) {
			System.out.println();
			System.out.print(msg);
			choice = sc.nextInt();

			switch (choice) {
			case 1:
				if (tv.power) {
					System.out.println("���� ����");
				} else {
					System.out.println("���� �ѱ�");
				}
				tv.powerOnOff();
				break;
			case 2:
				if (tv.power) {
					System.out.println("ä��: " + tv.channelUp());
				}
				break;
			case 3:
				if (tv.power && tv.channel > 1) {
					System.out.println("ä��: " + tv.channelDown());
				}
				break;
			default:
				System.out.println("�߸� �Է��ϼ̽��ϴ�");
			}
		}
	}
}
