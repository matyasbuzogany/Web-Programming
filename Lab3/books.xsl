<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>

<html lang="en">
  <head>
    <title>
      Books categorised
    </title>
  </head>
<body>
  <link rel="stylesheet" type="text/css" href="books.css"/>


    <div>
    <h2>Fantasy: </h2>
      <table>
          <tr>
              <th> Title </th>
              <th> Author </th>
              <th> Year </th>
              <th> ISBN </th>
          </tr>
          <xsl:for-each select="collection/book[category='Fantasy']">
            <xsl:sort select="title"/>
            <tr class="fantasy">
                <td> <xsl:value-of select="title "/> </td>
                <td> <xsl:value-of select="author"/> </td>
                <td> <xsl:value-of select="year"/> </td>
                <td> <xsl:value-of select="isbn"/> </td>
              </tr>
          </xsl:for-each>
        </table>
      </div>

  <div>
  <h2>Math: </h2>
      <table>
          <tr>
              <th> Title </th>
              <th> Author </th>
              <th> Year </th>
              <th> ISBN </th>
          </tr>
          <xsl:for-each select="collection/book[category='Math']">
            <xsl:sort select="title"/>
          <tr class="math">
              <td> <xsl:value-of select="title "/> </td>
              <td> <xsl:value-of select="author"/> </td>
              <td> <xsl:value-of select="year"/> </td>
              <td> <xsl:value-of select="isbn"/> </td>
          </tr>
          </xsl:for-each>
      </table>
    </div>

    <div>
      <h2>Biography: </h2>
      <table>
          <tr>
              <th> Title </th>
              <th> Author </th>
              <th> Year </th>
              <th> ISBN </th>
          </tr>
          <xsl:for-each select="collection/book[category='Biography']">
            <xsl:sort select="title"/>
          <tr class="biography">
                <td> <xsl:value-of select="title "/> </td>
                <td> <xsl:value-of select="author"/> </td>
                <td> <xsl:value-of select="year"/> </td>
                <td> <xsl:value-of select="isbn"/> </td>
          </tr>
          </xsl:for-each>
      </table>
    </div>



</body>
</html>
</xsl:template>
</xsl:stylesheet>
