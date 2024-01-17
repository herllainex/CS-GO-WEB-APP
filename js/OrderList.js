// JavaScript Document

var currentOrderList;
// initialization function
function init() {
	objectManager = new ObjectManager() ;
	animationManager = new AnimationManager(objectManager) ;
	currentOrderList = new OrderList(animationManager, drawing.width, drawing.height) ;
}

// Sequence table
var OrderList = function(animManager, width, height) {
	this.init(animManager, width, height) ;
	// this.initControls() ; // 初始化控件
	this.initAttributes() ; // 初始化属性
}
// Inheritance and construction
OrderList.prototype = new Algorithm();
OrderList.prototype.constructor = OrderList;

// Initialize controls

OrderList.prototype.initControls = function() {
	addLabelToAlgorithmBar("Array Size");
	this.insertField_maxSize = addInputToAlgorithmBar("text", "");
	this.initButton = addInputToAlgorithmBar("button", "Initialize Array");
	this.initButton.onclick = this.initCallBack.bind(this);
	addLabelToAlgorithmBar("Index");
	this.insertField_seq = addInputToAlgorithmBar("text", "");
	addLabelToAlgorithmBar("Value");
	this.insertField_value = addInputToAlgorithmBar("text", "");
	this.insertButton = addInputToAlgorithmBar("button", "Insert Node");
	this.insertButton.onclick = this.insertCallBack.bind(this);
	addLabelToAlgorithmBar("Index");
	this.insertField_del = addInputToAlgorithmBar("text", "");
	this.deleteButton = addInputToAlgorithmBar("button", "Delete Node");
	this.deleteButton.onclick = this.deleteCallBack.bind(this);

}

// initialization
OrderList.prototype.initAttributes = function() {
	// 逻辑部分ID
	this.head = -1 ; // 头指针
	// 图形部分
	this.objectID = 1 ; // 图形的序号
	this.width = 50 ; // 矩形的宽度
	this.height = 50 ; // 矩形的高度
	this.foregroundColor = '#1E90FF' ; // 前景色
	this.backgroundColor = '#B0E0E6' ; // 背景色
	this.tomato = '#FF6347' ; // tomato色
	this.palegreen = '#32CD32' ; // palegreen色
	this.startX = 100 ; // 开始的x坐标
	this.startY = 150 ; // 开始的y坐标
	this.startArrayY = 250 ; // 开始的数组的y坐标
	this.startArrowY = 300 ; // 开始的箭头的y坐标
	this.length = 30 ; // 箭头的长度
	// this.implementAction(this.initStateBox.bind(this), "start") ;
}

// initialization status box
OrderList.prototype.initStateBox = function(state) {
	return this.commands ;
}

// Initialization callback function
OrderList.prototype.initCallBack = function(length) {
	if (parseInt(length) > 0 && parseInt(length) <= 18) {
		this.implementAction(this.initArray.bind(this), length);
		this.cmd("Step");
		this.cmd("SetState", "Inserting elements starting from 0.");
	}
	else {
		alert('The length of the input array should be between 0 and 18.');
	}
}

// Insert callback function
OrderList.prototype.insertCallBack = function(seq, value) {
	if (this.maxSize == null) {
		alert("Please initialize the array first.");
		return;
	}
	if (seq != "" && value != "")
	{
		this.implementAction(this.insertNode.bind(this), [seq, value]);
	}
}

// Delete callback function
OrderList.prototype.deleteCallBack = function(seq) {
	if (seq != "")
	{
		this.implementAction(this.deleteNode.bind(this), seq);
	}
}

OrderList.prototype.clearCanvas = function() {
	// Clear array
	if(this.arrayList != null && this.arrayList != undefined) {
		for(var i=0 ; i<this.arrayList.length ; i++) {
			this.cmd("Delete", this.arrayList[i].objectID) ;
		}
		this.arrayList = null ;
	}
	// clear pos label
	if(this.arrayListLabel != null && this.arrayListLabel != undefined) {
		for(var i=0 ; i<this.arrayListLabel.length ; i++) {
			this.cmd("Delete", this.arrayListLabel[i].objectID) ;
		}
		this.arrayListLabel = null ;
	}
	// Clear element
	if(this.orderList != null && this.orderList != undefined) {
		for(var i=0 ; i<this.orderList.length ; i++) {
			if (this.orderList[i] != undefined && this.orderList[i] instanceof OrderListNode) {
				this.cmd("Delete", this.orderList[i].objectID) ;
			}
		}
		this.orderList = null ;
	}
	// clear arrow
	if(this.arrow != null) {
		this.cmd("Delete", this.arrow.objectID) ;
		this.arrow = null ;
	}
}

// initialize array
OrderList.prototype.initArray = function(maxSize) {
	// Delete all arrays
	this.clearCanvas();
	this.head = -1;
	this.maxSize = parseInt(maxSize) ; // Maximum array capacity
	this.arrayList = new Array(this.maxSize) ; // Array boxes
	this.arrayListLabel = new Array(this.maxSize); // Position labels
	this.orderList = new Array(this.maxSize) ; // Ordered list array
	// 设置状态栏
	{
		this.cmd("SetState", "Create an array of size " + maxSize);
	}
	// 创建数组
	for(var i=0 ; i<this.maxSize ; i++) {
		this.arrayList[i] = new OrderListNode(this.objectID, "", parseInt(this.startX+i*(this.width-1)), this.startArrayY) ;
		this.objectID ++ ;
		// 创建矩形
		{
			this.cmd("CreateRectangle", this.arrayList[i].objectID, this.arrayList[i].value, this.width, this.height, 
					 'center', 'center', this.arrayList[i].x, this.arrayList[i].y) ;
			this.cmd("SetForegroundColor", this.arrayList[i].objectID, this.foregroundColor) ;
			this.cmd("SetBackgroundColor", this.arrayList[i].objectID, '#FFFFFF') ;
		}
		// create pos label
		this.arrayListLabel[i] = new OrderListNode(this.objectID, i, parseInt(this.startX+i*(this.width-1)), this.startArrayY+40);
		this.objectID ++;
		this.cmd("CreateLabel", this.arrayListLabel[i].objectID, this.arrayListLabel[i].value, this.arrayListLabel[i].x, this.arrayListLabel[i].y);
		this.cmd("SetForegroundColor", this.arrayListLabel[i].objectID, this.foregroundColor);
		this.cmd("SetBackgroundColor", this.arrayListLabel[i].objectID, '#FFFFFF');
		
	}
	this.cmd("Step");
	return this.commands;
}
	
// 插入
OrderList.prototype.insertNode = function(valueArr) {
	var pos = valueArr[0] ;
	var value = valueArr[1] ;
	var newNode;
	if(this.head >= this.maxSize-1) {
		// alert('Already full!') ;
		this.cmd("SetState", "The ordered list is full, cannot insert!");

	}
	else {
		if(pos > this.head+1 || pos < 0) {
			this.cmd("SetState", "Wrong Location！");
			// alert('Position error!') ;
		}
		else {
			this.head ++ ;
			newNode = new OrderListNode(this.objectID, value, this.startX, this.startY) ;
			this.objectID ++ ;
			// 创建矩形
			{
				this.cmd("SetState", "Create an array element with a value of " + value);
				this.cmd("Step") ;
				this.cmd("CreateRectangle", newNode.objectID, newNode.value, this.width, this.height, 
					'center', 'center', newNode.x, newNode.y) ;
				this.cmd("SetForegroundColor", newNode.objectID, this.foregroundColor) ;
				this.cmd("SetBackgroundColor", newNode.objectID, this.backgroundColor) ;
				this.cmd("Step") ;
			}
			// 查找对应位置
			if(this.head == pos) {
				// 方框高亮
				{
					this.cmd("SetState", "No element at position " + pos + " in the array, new element can be inserted");
					this.cmd("Step") ;
					this.cmd("SetHighlight", this.arrayList[pos].objectID, true) ;
					this.cmd("Step") ;
					this.cmd("SetHighlight", this.arrayList[pos].objectID, false) ;
					this.cmd("Step") ;
				}
			}
			else {
				// 数组元素高亮
				{
					this.cmd("SetState", "There is an element at position " + pos + " in the array, shift all subsequent elements one position to the right");
					this.cmd("Step") ;
					this.cmd("SetHighlight", this.orderList[pos].objectID, true) ;
					this.cmd("Step") ;
					this.cmd("SetHighlight", this.orderList[pos].objectID, false) ;
					this.cmd("Step") ;
				}
				// 之后的节点向后移动一位
				for(var i=this.head-1 ; i>=pos ; i--) {
					this.orderList[i+1] = this.orderList[i] ;
					this.orderList[i+1].x += this.width-1 ;
					// 元素移动
					{
						this.cmd("Move", this.orderList[i+1].objectID, this.orderList[i+1].x, this.orderList[i+1].y) ;
					}
				}
				this.cmd("Step") ;
			}
			// 新生成的节点插入
			this.orderList[pos] = newNode ;
			this.orderList[pos].x = parseInt(this.startX+pos*(this.width-1)) ;
			this.orderList[pos].y = this.startArrayY ;
			{
				this.cmd("SetState", "Inserting new element " + value + " at position " + pos + " in the array");
				this.cmd("Step") ;
				this.cmd("Move", this.orderList[pos].objectID, this.orderList[pos].x ,this.orderList[pos].y) ;
				this.cmd("Step") ;
			}
			// 画头指针
			if(this.head == 0) {
				this.arrow = new OrderListNode(this.objectID, 'head', this.startX, this.startArrowY);
				{
					this.cmd("CreatePointer", this.arrow.objectID, "head", this.length, 'up', this.arrow.x, this.arrow.y) ;
					this.cmd("SetForegroundColor", this.arrow.objectID, this.tomato) ;
					this.cmd("Step") ;
				}
				this.objectID ++ ;
			}
			else {
				this.arrow.x = parseInt(this.arrow.x + this.width - 1) ;
				this.cmd("Move", this.arrow.objectID, this.arrow.x, this.arrow.y) ;
			}
			// 判断是否满
			if(this.head == this.maxSize-1) {
				this.cmd("SetState", "The array is full, cannot insert");
				this.cmd("Step") ;
			}
			this.objectID ++ ;
		}
	}
	return this.commands ;
}
	
// 删除
OrderList.prototype.deleteNode = function(pos) {
	if(this.head <= -1) {
		// alert('Already empty!') ;
		this.cmd("SetState", "The ordered list is empty, cannot delete!");
	}
	else {
		if(pos > this.head || pos < 0) {
			this.cmd("SetState", "Position error!");
			// alert('Position error!') ;
		}
		else {
			// 查找对应位置
			{
				this.cmd("SetState", "Deleting element " + this.orderList[pos].value + " at position " + pos + " in the array");
				this.cmd("Step") ;
				this.cmd("SetHighlight", this.orderList[pos].objectID, true) ;
				this.cmd("Step") ;
				this.cmd("SetHighlight", this.orderList[pos].objectID, false) ;
				this.cmd("Step") ;
			}
			// 新生成的节点删除
			{
				this.cmd("Move", this.orderList[pos].objectID, this.startX ,this.startY) ;
				this.cmd("Step") ;
				this.cmd("Delete", this.orderList[pos].objectID) ;
				this.cmd("Step") ;
			}
			if(pos != this.head) {
				// 元素向后移动
				{
					this.cmd("SetState", "Moving elements after position " + pos + " in the array forward");
					this.cmd("Step") ;
				}
				// 之后的节点向前移动一位
				for(var i=parseInt(pos)+1 ; i<=this.head ; i++) {
					this.orderList[i-1] = this.orderList[i] ;
					this.orderList[i-1].x -= this.width-1 ;
					// 元素移动
					{
						this.cmd("Move", this.orderList[i-1].objectID, this.orderList[i-1].x, this.orderList[i-1].y) ;
					}
				}
				this.cmd("Step") ;
				// 删除成功
				{
					this.cmd("SetState", "Deletion successful");
					this.cmd("Step") ;
				}
			}
			else {
				// 元素向后移动
				{
					this.cmd("SetState", "Deletion successful");
					this.cmd("Step") ;
				}
			}
			this.orderList[this.head] = [] ;
			this.head -- ;
			// 画头指针
			if(this.head == -1) {
				this.cmd("Delete", this.arrow.objectID) ;
			}
			else {
				this.arrow.x = parseInt(this.arrow.x - (this.width-1)) ;
				this.cmd("Move", this.arrow.objectID, this.arrow.x, this.arrow.y) ;
			}
			// 判断数组是否空
			if(this.head == -1) {
				this.cmd("SetState", "The array is empty, cannot delete");

				this.cmd("Step") ;
			}
		}
	}
	return this.commands ;
}

// 顺序表的节点
var OrderListNode = function(objectID, value, x, y) {
	this.objectID = objectID ; // 图形序号
	this.value = value ; // 值
	this.x = x ; // x坐标
	this.y = y ; // y坐标
}
