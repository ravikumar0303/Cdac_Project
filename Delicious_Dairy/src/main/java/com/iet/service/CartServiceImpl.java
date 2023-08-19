package com.iet.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iet.dao.CartRepository;
import com.iet.dao.ProductRepository;
import com.iet.dao.StockRepository;
import com.iet.dao.UserRepository;
import com.iet.pojos.Cart;
import com.iet.pojos.Product;
import com.iet.pojos.Stock;
import com.iet.pojos.User;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ProductRepository prodRepo;

	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private StockRepository stockRepo;

	@Override
	public String addItemToCart(Integer productId, Integer quantity, Integer userId) {
		User customer = userRepo.findById(userId).get();
		Product product = prodRepo.findById(productId).get();
		Stock stock = stockRepo.findById(productId).get();
		if (stock.getQuantity() < quantity) {
			return "We only have " + stock.getQuantity() + " " + stock.getUnit() + "(s) of " + product.getName() + " .";
		}
		cartRepo.save(new Cart(quantity, product, customer));
		return quantity + product.getName() + " added to cart";
	}

	@Override
	public List<Cart> getAllCartContents(Integer userId) {
		return cartRepo.findAllItemsByUser(userId);
	}

	@Override
	public String updateQuantity(Integer cartId, Integer quantity) {
		Cart cartItem = cartRepo.findById(cartId).get();
		int stockId = cartItem.getSelectedProduct().getId();
		Stock stock = stockRepo.findById(stockId).get();
		if (stock.getQuantity() < quantity)
			return "We only have " + stock.getQuantity() + " " + stock.getUnit() + "(s) left!.";
		cartItem.setQuantity(quantity);
		return "success";
	}

	@Override
	public void deleteFromCart(Integer cartId) {
		cartRepo.deleteById(cartId);
	}

	@Override
	public void deleteAllFromCart(Integer userId) {
		cartRepo.deleteAll(cartRepo.findAllItemsByUser(userId));
		return;
	}

	@Override
	public Optional<Cart> findById(Integer cartId) {
		return cartRepo.findById(cartId);
	}

}
