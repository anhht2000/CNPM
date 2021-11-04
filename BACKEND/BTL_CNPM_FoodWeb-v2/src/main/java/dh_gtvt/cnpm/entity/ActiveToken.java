package dh_gtvt.cnpm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "activeToken", catalog = "Restaurant")
public class ActiveToken implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short id;

	@Column(name = "token", nullable = false, unique = true)
	private String token;

	@OneToOne
	@JoinColumn(name = "userID", nullable = false)
	private User user;

	@Column(name = "expiredDate")
	@Temporal(TemporalType.TIMESTAMP)
	private Date expiredDate;

	public ActiveToken() {
		super();
		//expierd 1hour
		expiredDate = new Date(System.currentTimeMillis() + 1 * 60 * 60 * 100);
	}

	public short getId() {
		return id;
	}

	public void setId(short id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getExpiredDate() {
		return expiredDate;
	}

	public void setExpiredDate(Date expiredDate) {
		this.expiredDate = expiredDate;
	}

}
