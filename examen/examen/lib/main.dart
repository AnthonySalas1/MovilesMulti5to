import 'package:flutter/material.dart';
import 'package:examen/screen/Routes.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Components',
      home: firstPage(),
    );
  }
}

class firstPage extends StatelessWidget {
  Widget getListView(BuildContext context) {
    var listView = ListView(children: <Widget>[
      ListTile(
          leading: Icon(Icons.add_alert),
          title: Text('Alertas'),
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const FirstRoute()),
            );
          },
          trailing: Icon(Icons.arrow_forward_ios)),
      ListTile(
          leading: Icon(Icons.accessibility),
          title: Text('Avatars'),
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const SecondRoute()),
            );
          },
          trailing: Icon(Icons.arrow_forward_ios)),
      ListTile(
        leading: Icon(Icons.folder_outlined),
        title: Text('Cards-Tarjetas'),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const ThirdRoute()),
          );
        },
        trailing: Icon(Icons.arrow_forward_ios),
      ),
      ListTile(
        leading: Icon(Icons.circle_outlined),
        title: Text('Animated Container'),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const FourthRoute()),
          );
        },
        trailing: Icon(Icons.arrow_forward_ios),
      ),
      ListTile(
        leading: Icon(Icons.input),
        title: Text('Inputs'),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const FithRoute()),
          );
        },
        trailing: Icon(Icons.arrow_forward_ios),
      ),
      ListTile(
        leading: Icon(Icons.tune),
        title: Text('Slider-Checks'),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const SithRoute()),
          );
        },
        trailing: Icon(Icons.arrow_forward_ios),
      ),
      ListTile(
        leading: Icon(Icons.list),
        title: Text('Listas y Scroll'),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const SeventhRoute()),
          );
        },
        trailing: Icon(Icons.arrow_forward_ios),
      ),
    ]);
    return listView;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Components'),
        ),
        body: getListView(context));
  }
}
