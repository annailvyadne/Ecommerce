import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model'; // Correct relative path  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  
  // Define categories with a list of products
  productsCategory: ProductCategory[] = [
    {
      categoryName: 'Digital Planners',
      products: [
        { name: 'Monthly Planner', category: 'Digital Planners', price: 299, description: 'A monthly planner to organize your schedule effectively.', imageUrl: 'assets/images/monthly-planner.png' },
        { name: 'Meal Planner', category: 'Digital Planners', price: 199, description: 'Plan your meals and grocery shopping efficiently.', imageUrl: 'assets/images/meal-planner.png' },
        { name: 'Fitness Planner', category: 'Digital Planners', price: 249, description: 'Track your fitness goals and progress from time to time.', imageUrl: 'assets/images/fitness-planner.png' },
        { name: 'Budget Planner', category: 'Digital Planners', price: 149, description: 'Keep your budget in check with this detailed planner.', imageUrl: 'assets/images/budget-planner.png' }
      ]
    },
    {
      categoryName: 'Digital Journals',
      products: [
        { name: 'Bullet Journal', category: 'Digital Journals', price: 199, description: 'Customize your journaling experience with this bullet journal.', imageUrl: 'assets/images/bullet-journal.png' },
        { name: 'Dream Journal', category: 'Digital Journals', price: 149, description: 'Track your dreams and reflect with this journal to achieve it.', imageUrl: 'assets/images/dream-journal.png' },
        { name: 'Self-care Journal', category: 'Digital Journals', price: 149, description: 'Focus on self-care with this guided journal to build confidence.', imageUrl: 'assets/images/self-care-journal.png' }
      ]
    },
    {
      categoryName: 'Kids Workbook',
      products: [
        { name: 'Alphabet & Tracing Workbook', category: 'Kids Workbook', price: 299, description: 'Help kids learn their ABCs with various forms of tracing exercises.', imageUrl: 'assets/images/alphabet-workbook.png' },
        { name: 'Numbers & Counting Workbook', category: 'Kids Workbook', price: 299, description: 'A fun workbook to teach kids numbers and counting.', imageUrl: 'assets/images/numbers-workbook.png' },
        { name: 'Games & Coloring Workbook', category: 'Kids Workbook', price: 299, description: 'Engage kids with fun math puzzles and games to beat the boredom.', imageUrl: 'assets/images/math-workbook.png' }
      ]
    },
    {
      categoryName: 'Educational Printables',
      products: [
        { name: 'Flashcards for Kids', category: 'Educational Printables', price: 189, description: 'Interactive flashcards for early learning.', imageUrl: 'assets/images/flashcards.png' },
        { name: 'Multiplication Tables Chart', category: 'Educational Printables', price: 189, description: 'A handy multiplication chart for quick reference.', imageUrl: 'assets/images/multiplication-chart.png' }
      ]
    },
    {
      categoryName: 'Business Printables',
      products: [
        { name: 'Invoice Template', category: 'Business Printables', price: 299, description: 'Professional invoice template for your business.', imageUrl: 'assets/images/invoice-template.png' },
        { name: 'Business Planner', category: 'Business Printables', price: 399, description: 'Plan your business goals and strategies.', imageUrl: 'assets/images/business-planner.png' },
        { name: 'Meeting Notes Template', category: 'Business Printables', price: 199, description: 'Keep track of meeting notes and action items.', imageUrl: 'assets/images/meeting-notes.png' }
      ]
    },
    {
      categoryName: 'Event and Party Printables',
      products: [
        { name: 'Party Invitation Template', category: 'Event and Party Printables', price: 149, description: 'Personalized party invitation template.', imageUrl: 'assets/images/party-invitation.png' },
        { name: 'Event Planner', category: 'Event and Party Printables', price: 299, description: 'Plan your event step-by-step with this planner.', imageUrl: 'assets/images/event-planner.png' },
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
