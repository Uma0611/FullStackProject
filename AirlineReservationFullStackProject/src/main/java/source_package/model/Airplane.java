package source_package.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

/* To differentiate java file and database related java file we use @Entity
 * for  the database know to which class the object created belongs. The table will be 
 * created automatically and by default it creates table name same as the class name.
 * @DynamicUpdate, avoids checking for changes in values in all the columns,
 * by checking and updating only the specific column's value that is said to update.
 * @Table is used to create our own name for the table which has been created in the 
 * database, if class name is not required as a table name */
@Entity
@Table(name ="Airplane_system")
@DynamicUpdate
public class Airplane {


	/* @Id must be given to the entity classes, which makes
	 * the attributes to act as primary key.In @GeneratedValue, what
	 * type of primary key to be generated is given in it. Here, primary key
	 * type IDENTITY is given which starts by 1 and increments by 1. @Column
	 * is used to create our own name for the column of the table which has
	 *  been created in the database, if attribute name is not required as a column name */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer flightId;

	@Column(name = "airplaneName")
	private String  flightName;

	@Column(name = "sourcePoint")
	private String initialPoint;

	@Column(name = "destinationPoint")
	private String terminalPoint;

	private Integer seatingQuantity;
	private Integer price;
	private Integer numberOfSeats;
	private Integer calculatedPrice;
	private Boolean isInternationalFlight;

	public Airplane() {
	}

	public Airplane(String flightName, String initialPoint, String terminalPoint,Integer seatingQuantity, Integer price,Integer numberOfSeats,Integer calculatedPrice, Boolean isInternationalFlight) {
		this.flightName = flightName;
		this.initialPoint = initialPoint;
		this.terminalPoint = terminalPoint;
		this.seatingQuantity = seatingQuantity;
		this.price = price;
		this. numberOfSeats= numberOfSeats;
		this.calculatedPrice=calculatedPrice;
		this.isInternationalFlight=isInternationalFlight;
	}
	/* Here we used setter method for all the attributes  to set the value.
	 * "this" keyword refers to the current class object and also as the names 
	 * of attribute & variable in parameters  are similar we used "this" keyword 
	 * to differentiate between them. Here we used getter method for  all the 
	 * attributes to return it's value.*/
	public Integer getFlightId() {
		return flightId;
	}

	public void setFlightId(Integer flightId) {
		this.flightId = flightId;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getInitialPoint() {
		return initialPoint;
	}

	public void setInitialPoint(String initialPoint) {
		this.initialPoint = initialPoint;
	}

	public String getTerminalPoint() {
		return terminalPoint;
	}

	public void setTerminalPoint(String terminalPoint) {
		this.terminalPoint = terminalPoint;
	}

	public Integer getSeatingQuantity() {
		return seatingQuantity;
	}

	public void setSeatingQuantity(Integer seatingQuantity) {
		this.seatingQuantity = seatingQuantity;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(Integer numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public Integer getCalculatedPrice() {
		return calculatedPrice;
	}

	public void setCalculatedPrice(Integer calculatedPrice) {
		this.calculatedPrice = calculatedPrice;
	}

	public Boolean getIsInternationalFlight() {
		return isInternationalFlight;
	}

	public void setIsInternationalFlight(Boolean isInternationalFlight) {
		this.isInternationalFlight = isInternationalFlight;
	}
}


