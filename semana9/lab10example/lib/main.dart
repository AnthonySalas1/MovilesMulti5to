import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show debugPaintSizeEnabled;

void main() {
  debugPaintSizeEnabled = false; // Set to true for visual layout
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const showGrid = true; // Set to false to show ListView

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'semana11',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('LENGUAJES'),
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
        ),
        body: Center(child: showGrid ? _buildGrid() : _buildList()),
      ),
    );
  }

  // #docregion grid
  Widget _buildGrid() => GridView.extent(
      maxCrossAxisExtent: 150,
      padding: const EdgeInsets.all(4),
      mainAxisSpacing: 4,
      crossAxisSpacing: 4,
      children: _buildGridTileList(30));

  List<Container> _buildGridTileList(int count) => List.generate(
      count,
      (i) => Container(
            child: Image.asset('images/pic$i.jpg'),
            decoration: BoxDecoration(
                border: Border.all(color: Colors.yellow, width: 0.5)),
          ));
  // #enddocregion grid

  // #docregion list
  Widget _buildList() {
    return ListView(
      children: [],
    );
  }

  ListTile _tile(String title, String subtitle, IconData icon) {
    return ListTile(
      title: Text(title,
          style: const TextStyle(
            fontWeight: FontWeight.w500,
            fontSize: 20,
          )),
      subtitle: Text(subtitle),
      leading: Icon(
        icon,
        color: Colors.blue[500],
      ),
    );
  }
  // #enddocregion list
}
