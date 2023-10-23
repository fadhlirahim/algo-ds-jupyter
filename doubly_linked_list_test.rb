require 'minitest/autorun'
require_relative 'doubly_linked_list'

class TestDoublyLinkedList < Minitest::Test

  def test_prepend
    list = DoublyLinkedList.new
    list.prepend(1)
    assert_equal 1, list.head.val

    list.prepend(2)
    assert_equal 2, list.head.val
    assert_equal 1, list.head.next.val
  end

  def test_append
    list = DoublyLinkedList.new

    list.append(1)
    assert_equal 1, list.tail.val

    list.append(2)
    assert_equal 2, list.tail.val
    assert_equal 1, list.tail.prev.val
  end
  
  def test_insert_at
    list = DoublyLinkedList.new

    list.insert_at(0, 1)
    assert_equal 1, list.head&.val

    list.insert_at(1, 2)
    assert_equal 2, list.head&.next&.val
    assert_equal 1, list.head&.val 

    list.insert_at(2, 3)
    assert_equal 3, list.head&.next&.next.val
    assert_equal 2, list.head&.next&.val

    list.insert_at(3, 4)  
    assert_equal 4, list.head&.next&.next&.next&.val
    assert_equal 3, list.head&.next&.next.val

    assert_equal 4, list.tail.val
    
    assert_equal "Invalid index", list.insert_at(100, 1)
  end

  def test_get_by_index
    list = DoublyLinkedList.new
    list.prepend(10)
    list.append(20)
    list.append(30)
    assert_equal 10, list.get_by(0)
    assert_equal 20, list.get_by(1)
    assert_equal 30, list.get_by(2)
  end


  def test_remove_item
    list = DoublyLinkedList.new
    list.prepend(10)
    list.append(20)
    list.append(30)
    list.append(40)
    # This will generate a list with val 10 -> 20 -> 30 -> 40 

    assert_equal(4, list.size)

    # removing head
    list.remove(10)
    assert_equal 3, list.size
    
    # removing 30 in the middle
    list.remove(30)
    assert_equal 2, list.size
    
    # removing item at the tail
    list.remove(40)
    assert_equal 1, list.size

    assert_equal 20, list.get_by(0)
  end

  def test_remove_by_index
    list = DoublyLinkedList.new
    list.prepend(10)
    list.append(20)
    list.append(30)
    list.append(40)
    list.append(50)
    # This will generate a list with val 10 -> 20 -> 30 -> 40 

    # remove at index 0
    assert_equal 10, list.get_by(0)
    list.remove_at(0)
    assert_equal 4, list.size
    refute_equal 10, list.get_by(0) 
    
    # remove at index 3 (tail)
    assert_equal 50, list.get_by(3)
    list.remove_at(3)
    assert_equal 3, list.size
    refute_equal 50, list.get_by(3) 

    # remove at index 1
    assert_equal 30, list.get_by(1)
    list.remove_at(1)
    assert_equal 2, list.size
    refute_equal 30, list.get_by(1)

    assert_equal 20, list.head.val
    assert_equal 40, list.tail.val
  end
end

