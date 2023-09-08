package car;

public class Car extends Main{
	String brand;
	String color;
	int price;

	public Car(String brand, String color, int price) {
		super();
		this.brand = brand;
		this.color = color;
		this.price = price;
	}
	void enginStart() {
		System.out.println("시동이 켜졌습니다");
	}
	void enginStop() {
		System.out.println("시동이 꺼졌습니다");
	}
}
