package com.example.demo.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;




@Data
@AllArgsConstructor
@Document(collection = "Orders")
public class BookingOrder {
	
	@Id
	private String id;
	private String quantity;
	private String startOrder;
	private String endOrder;
	
	public BookingOrder() {
		
	}

	public BookingOrder(String id, String quantity, String startOrder, String endOrder) {
		this.id = id;
		this.quantity = quantity;
		this.startOrder = startOrder;
		this.endOrder = endOrder;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getStartOrder() {
		return startOrder;
	}

	public void setStartOrder(String startOrder) {
		this.startOrder = startOrder;
	}

	public String getEndOrder() {
		return endOrder;
	}

	public void setEndOrder(String endOrder) {
		this.endOrder = endOrder;
	}

	@Override
	public String toString() {
		return "BookingOrder [id=" + id + ", quantity=" + quantity + ", startOrder=" + startOrder + ", endOrder="
				+ endOrder + "]";
	}


	

	

	

}
