class Node
  attr_accessor :val, :next, :prev

  def initialize(val)
    @val = val
  end 
end


class DoublyLinkedList
  attr_accessor :head, :tail, :size

  def initialize(head = nil, tail = nil)
    @head = @tail = head
    @size = @head.nil? ? 0 : 1
  end

  def prepend(val)
    new_node = Node.new(val)
    if head.nil?
      self.head = self.tail = new_node
      @size += 1
      return
    end
    
    new_node.next = @head
    self.head.prev = new_node
    self.head = new_node

    @size += 1
  end

  def insert_at(index, val)
    return "Invalid index" if index < 0 || index > @size

    if index == 0
      return self.prepend(val)
    end
    
    if index == @size
      return self.append(val)
    end
    
    new_node = Node.new(val)
    
    # walk thru the node and setting the current pointer 
    # to set the next new node
    current = @head
    current_idx = 0
    while(current_idx < index - 1) do
      current = current.next
      current_idx += 1
    end
    
    # Before:
    # 
    # current -> current.next
    # 
    # After: 
    # 
    # current -> new_node -> current.next
    #          ^            ^
    #          |            | 
    #         prev          prev
    new_node.next = current&.next
    new_node.prev = current
    current&.next&.prev = new_node
    current&.next = new_node
      
    @size += 1
  end

  def append(val)
    new_node = Node.new(val)
    if @head.nil?
      self.head = self.tail = new_node
      return
    end

    @tail.next = new_node
    new_node.prev = @tail
    self.tail = new_node
    @size += 1
  end


  def get_by(index)
    return "Invalid index" if index < 0 || index >= @size

    if index == 0
      return @head.val
    end

    if index == @size - 1
      return @tail.val
    end 

    current = @head
    current_idx = 0
    while(current_idx < index - 1) do
      current = current.next
    end
    
    if current.next
      return current.next.val
    end
  end

  def remove(item)  
    if item == @head.val
      self.head = @head.next
      @size -= 1
      return 
    end

    if item == @tail.val
      self.tail = @tail.prev
      @size -= 1
      return
    end

    current = @head
    while(current && current.val != item)    
      current = current.next 
    end

    # current -> current.next -> current.next.next
    current&.next = current&.next&.next
    current&.prev = current&.next&.prev
    @size -= 1
  end
  
  def remove_at(index)
    return "Invalid index" if index < 0 || index >= size

    if index == 0 
      self.head = @head.next
      @size -= 1
      return
    end

    if index == @size - 1
      self.tail = @tail.prev
      @size -= 1
      return
    end

    current = @head
    curr_index = 0
    while(curr_index < index - 1) do
      current = current.next 
    end

    # current -> current.next -> current.next.next
    current&.next = current&.next&.next
    current&.prev = current&.next&.prev
    @size -= 1
  end

end

