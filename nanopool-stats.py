from flask import Flask, render_template
import mysql

app = Flask(__name__)


@app.route('/')
def nanopool_stats():
    return render_template("nanopool-stats.html", pagetitle="Mining Stats")


if __name__ == '__main__':
    app.run(debug=True)
