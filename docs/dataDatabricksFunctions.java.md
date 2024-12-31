# `dataDatabricksFunctions` Submodule <a name="`dataDatabricksFunctions` Submodule" id="@cdktf/provider-databricks.dataDatabricksFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFunctions <a name="DataDatabricksFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions databricks_functions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctions;

DataDatabricksFunctions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .schemaName(java.lang.String)
//  .functions(IResolvable)
//  .functions(java.util.List<DataDatabricksFunctionsFunctions>)
//  .includeBrowse(java.lang.Boolean)
//  .includeBrowse(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.functions">functions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.functions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `includeBrowse`<sup>Optional</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.includeBrowse"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions">resetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse">resetIncludeBrowse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFunctions` <a name="putFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions"></a>

```java
public void putFunctions(IResolvable OR java.util.List<DataDatabricksFunctionsFunctions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>>

---

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions"></a>

```java
public void resetFunctions()
```

##### `resetIncludeBrowse` <a name="resetIncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse"></a>

```java
public void resetIncludeBrowse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctions;

DataDatabricksFunctions.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctions;

DataDatabricksFunctions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctions;

DataDatabricksFunctions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctions;

DataDatabricksFunctions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksFunctions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksFunctions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksFunctions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFunctions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput">functionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput">includeBrowseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions"></a>

```java
public DataDatabricksFunctionsFunctionsList getFunctions();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput"></a>

```java
public java.lang.Object getFunctionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>>

---

##### `includeBrowseInput`<sup>Optional</sup> <a name="includeBrowseInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput"></a>

```java
public java.lang.Object getIncludeBrowseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `includeBrowse`<sup>Required</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse"></a>

```java
public java.lang.Object getIncludeBrowse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFunctionsConfig <a name="DataDatabricksFunctionsConfig" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsConfig;

DataDatabricksFunctionsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .schemaName(java.lang.String)
//  .functions(IResolvable)
//  .functions(java.util.List<DataDatabricksFunctionsFunctions>)
//  .includeBrowse(java.lang.Boolean)
//  .includeBrowse(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions">functions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions"></a>

```java
public java.lang.Object getFunctions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `includeBrowse`<sup>Optional</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse"></a>

```java
public java.lang.Object getIncludeBrowse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

### DataDatabricksFunctionsFunctions <a name="DataDatabricksFunctionsFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctions;

DataDatabricksFunctionsFunctions.builder()
//  .browseOnly(java.lang.Boolean)
//  .browseOnly(IResolvable)
//  .catalogName(java.lang.String)
//  .comment(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .dataType(java.lang.String)
//  .externalLanguage(java.lang.String)
//  .externalName(java.lang.String)
//  .fullDataType(java.lang.String)
//  .fullName(java.lang.String)
//  .functionId(java.lang.String)
//  .inputParams(IResolvable)
//  .inputParams(java.util.List<DataDatabricksFunctionsFunctionsInputParams>)
//  .isDeterministic(java.lang.Boolean)
//  .isDeterministic(IResolvable)
//  .isNullCall(java.lang.Boolean)
//  .isNullCall(IResolvable)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .parameterStyle(java.lang.String)
//  .properties(java.lang.String)
//  .returnParams(IResolvable)
//  .returnParams(java.util.List<DataDatabricksFunctionsFunctionsReturnParams>)
//  .routineBody(java.lang.String)
//  .routineDefinition(java.lang.String)
//  .routineDependencies(IResolvable)
//  .routineDependencies(java.util.List<DataDatabricksFunctionsFunctionsRoutineDependencies>)
//  .schemaName(java.lang.String)
//  .securityType(java.lang.String)
//  .specificName(java.lang.String)
//  .sqlDataAccess(java.lang.String)
//  .sqlPath(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage">externalLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName">externalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType">fullDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams">inputParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic">isDeterministic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall">isNullCall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#owner DataDatabricksFunctions#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle">parameterStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties">properties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#properties DataDatabricksFunctions#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams">returnParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody">routineBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition">routineDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies">routineDependencies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType">securityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName">specificName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess">sqlDataAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath">sqlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}. |

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly"></a>

```java
public java.lang.Object getBrowseOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}.

---

##### `externalLanguage`<sup>Optional</sup> <a name="externalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage"></a>

```java
public java.lang.String getExternalLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}.

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}.

---

##### `fullDataType`<sup>Optional</sup> <a name="fullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType"></a>

```java
public java.lang.String getFullDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}.

---

##### `inputParams`<sup>Optional</sup> <a name="inputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams"></a>

```java
public java.lang.Object getInputParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}.

---

##### `isDeterministic`<sup>Optional</sup> <a name="isDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic"></a>

```java
public java.lang.Object getIsDeterministic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}.

---

##### `isNullCall`<sup>Optional</sup> <a name="isNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall"></a>

```java
public java.lang.Object getIsNullCall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#owner DataDatabricksFunctions#owner}.

---

##### `parameterStyle`<sup>Optional</sup> <a name="parameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle"></a>

```java
public java.lang.String getParameterStyle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#properties DataDatabricksFunctions#properties}.

---

##### `returnParams`<sup>Optional</sup> <a name="returnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams"></a>

```java
public java.lang.Object getReturnParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}.

---

##### `routineBody`<sup>Optional</sup> <a name="routineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody"></a>

```java
public java.lang.String getRoutineBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}.

---

##### `routineDefinition`<sup>Optional</sup> <a name="routineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition"></a>

```java
public java.lang.String getRoutineDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}.

---

##### `routineDependencies`<sup>Optional</sup> <a name="routineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies"></a>

```java
public java.lang.Object getRoutineDependencies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}.

---

##### `specificName`<sup>Optional</sup> <a name="specificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName"></a>

```java
public java.lang.String getSpecificName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}.

---

##### `sqlDataAccess`<sup>Optional</sup> <a name="sqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess"></a>

```java
public java.lang.String getSqlDataAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}.

---

##### `sqlPath`<sup>Optional</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath"></a>

```java
public java.lang.String getSqlPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}.

---

### DataDatabricksFunctionsFunctionsInputParams <a name="DataDatabricksFunctionsFunctionsInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParams;

DataDatabricksFunctionsFunctionsInputParams.builder()
//  .parameters(IResolvable)
//  .parameters(java.util.List<DataDatabricksFunctionsFunctionsInputParamsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters"></a>

```java
public java.lang.Object getParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsInputParamsParameters <a name="DataDatabricksFunctionsFunctionsInputParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParamsParameters;

DataDatabricksFunctionsFunctionsInputParamsParameters.builder()
    .name(java.lang.String)
    .position(java.lang.Number)
    .typeName(java.lang.String)
    .typeText(java.lang.String)
//  .comment(java.lang.String)
//  .parameterDefault(java.lang.String)
//  .parameterMode(java.lang.String)
//  .parameterType(java.lang.String)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault">parameterDefault</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameterDefault`<sup>Optional</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault"></a>

```java
public java.lang.String getParameterDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsReturnParams <a name="DataDatabricksFunctionsFunctionsReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParams;

DataDatabricksFunctionsFunctionsReturnParams.builder()
//  .parameters(IResolvable)
//  .parameters(java.util.List<DataDatabricksFunctionsFunctionsReturnParamsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters"></a>

```java
public java.lang.Object getParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsReturnParamsParameters <a name="DataDatabricksFunctionsFunctionsReturnParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParamsParameters;

DataDatabricksFunctionsFunctionsReturnParamsParameters.builder()
    .name(java.lang.String)
    .position(java.lang.Number)
    .typeName(java.lang.String)
    .typeText(java.lang.String)
//  .comment(java.lang.String)
//  .parameterDefault(java.lang.String)
//  .parameterMode(java.lang.String)
//  .parameterType(java.lang.String)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault">parameterDefault</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameterDefault`<sup>Optional</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault"></a>

```java
public java.lang.String getParameterDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsRoutineDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependencies;

DataDatabricksFunctionsFunctionsRoutineDependencies.builder()
//  .dependencies(IResolvable)
//  .dependencies(java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies">dependencies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies"></a>

```java
public java.lang.Object getDependencies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies;

DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.builder()
//  .function(IResolvable)
//  .function(java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction>)
//  .table(IResolvable)
//  .table(java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function">function</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function DataDatabricksFunctions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table">table</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#table DataDatabricksFunctions#table}. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function"></a>

```java
public java.lang.Object getFunction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function DataDatabricksFunctions#function}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table"></a>

```java
public java.lang.Object getTable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#table DataDatabricksFunctions#table}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction;

DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.builder()
    .functionFullName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName">functionFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}. |

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName"></a>

```java
public java.lang.String getFunctionFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable;

DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.builder()
    .tableFullName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName">tableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}. |

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName"></a>

```java
public java.lang.String getTableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFunctionsFunctionsInputParamsList <a name="DataDatabricksFunctionsFunctionsInputParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParamsList;

new DataDatabricksFunctionsFunctionsInputParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get"></a>

```java
public DataDatabricksFunctionsFunctionsInputParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>>

---


### DataDatabricksFunctionsFunctionsInputParamsOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParamsOutputReference;

new DataDatabricksFunctionsFunctionsInputParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsInputParamsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput">parametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters"></a>

```java
public DataDatabricksFunctionsFunctionsInputParamsParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput"></a>

```java
public java.lang.Object getParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>

---


### DataDatabricksFunctionsFunctionsInputParamsParametersList <a name="DataDatabricksFunctionsFunctionsInputParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParamsParametersList;

new DataDatabricksFunctionsFunctionsInputParamsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get"></a>

```java
public DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>>

---


### DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference;

new DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault">resetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetParameterDefault` <a name="resetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault"></a>

```java
public void resetParameterDefault()
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode"></a>

```java
public void resetParameterMode()
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType"></a>

```java
public void resetParameterType()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput">parameterDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput">parameterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault">parameterDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterDefaultInput`<sup>Optional</sup> <a name="parameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput"></a>

```java
public java.lang.String getParameterDefaultInput();
```

- *Type:* java.lang.String

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput"></a>

```java
public java.lang.String getParameterModeInput();
```

- *Type:* java.lang.String

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput"></a>

```java
public java.lang.String getParameterTypeInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameterDefault`<sup>Required</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault"></a>

```java
public java.lang.String getParameterDefault();
```

- *Type:* java.lang.String

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>

---


### DataDatabricksFunctionsFunctionsList <a name="DataDatabricksFunctionsFunctionsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsList;

new DataDatabricksFunctionsFunctionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get"></a>

```java
public DataDatabricksFunctionsFunctionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>>

---


### DataDatabricksFunctionsFunctionsOutputReference <a name="DataDatabricksFunctionsFunctionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsOutputReference;

new DataDatabricksFunctionsFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams">putInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams">putReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies">putRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage">resetExternalLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType">resetFullDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams">resetInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic">resetIsDeterministic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall">resetIsNullCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle">resetParameterStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams">resetReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody">resetRoutineBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition">resetRoutineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies">resetRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType">resetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName">resetSpecificName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess">resetSqlDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath">resetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputParams` <a name="putInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams"></a>

```java
public void putInputParams(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsInputParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>>

---

##### `putReturnParams` <a name="putReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams"></a>

```java
public void putReturnParams(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsReturnParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>>

---

##### `putRoutineDependencies` <a name="putRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies"></a>

```java
public void putRoutineDependencies(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsRoutineDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly"></a>

```java
public void resetBrowseOnly()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDataType` <a name="resetDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetExternalLanguage` <a name="resetExternalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage"></a>

```java
public void resetExternalLanguage()
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName"></a>

```java
public void resetExternalName()
```

##### `resetFullDataType` <a name="resetFullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType"></a>

```java
public void resetFullDataType()
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetInputParams` <a name="resetInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams"></a>

```java
public void resetInputParams()
```

##### `resetIsDeterministic` <a name="resetIsDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic"></a>

```java
public void resetIsDeterministic()
```

##### `resetIsNullCall` <a name="resetIsNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall"></a>

```java
public void resetIsNullCall()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetParameterStyle` <a name="resetParameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle"></a>

```java
public void resetParameterStyle()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetReturnParams` <a name="resetReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams"></a>

```java
public void resetReturnParams()
```

##### `resetRoutineBody` <a name="resetRoutineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody"></a>

```java
public void resetRoutineBody()
```

##### `resetRoutineDefinition` <a name="resetRoutineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition"></a>

```java
public void resetRoutineDefinition()
```

##### `resetRoutineDependencies` <a name="resetRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies"></a>

```java
public void resetRoutineDependencies()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSecurityType` <a name="resetSecurityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType"></a>

```java
public void resetSecurityType()
```

##### `resetSpecificName` <a name="resetSpecificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName"></a>

```java
public void resetSpecificName()
```

##### `resetSqlDataAccess` <a name="resetSqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess"></a>

```java
public void resetSqlDataAccess()
```

##### `resetSqlPath` <a name="resetSqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath"></a>

```java
public void resetSqlPath()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams">inputParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams">returnParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies">routineDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput">externalLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput">externalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput">fullDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput">inputParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput">isDeterministicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput">isNullCallInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput">parameterStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput">returnParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput">routineBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput">routineDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput">routineDependenciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput">securityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput">specificNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput">sqlDataAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput">sqlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage">externalLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName">externalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType">fullDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic">isDeterministic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall">isNullCall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle">parameterStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties">properties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody">routineBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition">routineDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType">securityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName">specificName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess">sqlDataAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath">sqlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputParams`<sup>Required</sup> <a name="inputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams"></a>

```java
public DataDatabricksFunctionsFunctionsInputParamsList getInputParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a>

---

##### `returnParams`<sup>Required</sup> <a name="returnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams"></a>

```java
public DataDatabricksFunctionsFunctionsReturnParamsList getReturnParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a>

---

##### `routineDependencies`<sup>Required</sup> <a name="routineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesList getRoutineDependencies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput"></a>

```java
public java.lang.Object getBrowseOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `externalLanguageInput`<sup>Optional</sup> <a name="externalLanguageInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput"></a>

```java
public java.lang.String getExternalLanguageInput();
```

- *Type:* java.lang.String

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput"></a>

```java
public java.lang.String getExternalNameInput();
```

- *Type:* java.lang.String

---

##### `fullDataTypeInput`<sup>Optional</sup> <a name="fullDataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput"></a>

```java
public java.lang.String getFullDataTypeInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `inputParamsInput`<sup>Optional</sup> <a name="inputParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput"></a>

```java
public java.lang.Object getInputParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>>

---

##### `isDeterministicInput`<sup>Optional</sup> <a name="isDeterministicInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput"></a>

```java
public java.lang.Object getIsDeterministicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNullCallInput`<sup>Optional</sup> <a name="isNullCallInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput"></a>

```java
public java.lang.Object getIsNullCallInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `parameterStyleInput`<sup>Optional</sup> <a name="parameterStyleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput"></a>

```java
public java.lang.String getParameterStyleInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput"></a>

```java
public java.lang.String getPropertiesInput();
```

- *Type:* java.lang.String

---

##### `returnParamsInput`<sup>Optional</sup> <a name="returnParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput"></a>

```java
public java.lang.Object getReturnParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>>

---

##### `routineBodyInput`<sup>Optional</sup> <a name="routineBodyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput"></a>

```java
public java.lang.String getRoutineBodyInput();
```

- *Type:* java.lang.String

---

##### `routineDefinitionInput`<sup>Optional</sup> <a name="routineDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput"></a>

```java
public java.lang.String getRoutineDefinitionInput();
```

- *Type:* java.lang.String

---

##### `routineDependenciesInput`<sup>Optional</sup> <a name="routineDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput"></a>

```java
public java.lang.Object getRoutineDependenciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `securityTypeInput`<sup>Optional</sup> <a name="securityTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput"></a>

```java
public java.lang.String getSecurityTypeInput();
```

- *Type:* java.lang.String

---

##### `specificNameInput`<sup>Optional</sup> <a name="specificNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput"></a>

```java
public java.lang.String getSpecificNameInput();
```

- *Type:* java.lang.String

---

##### `sqlDataAccessInput`<sup>Optional</sup> <a name="sqlDataAccessInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput"></a>

```java
public java.lang.String getSqlDataAccessInput();
```

- *Type:* java.lang.String

---

##### `sqlPathInput`<sup>Optional</sup> <a name="sqlPathInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput"></a>

```java
public java.lang.String getSqlPathInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly"></a>

```java
public java.lang.Object getBrowseOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `externalLanguage`<sup>Required</sup> <a name="externalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage"></a>

```java
public java.lang.String getExternalLanguage();
```

- *Type:* java.lang.String

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

---

##### `fullDataType`<sup>Required</sup> <a name="fullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType"></a>

```java
public java.lang.String getFullDataType();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `isDeterministic`<sup>Required</sup> <a name="isDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic"></a>

```java
public java.lang.Object getIsDeterministic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNullCall`<sup>Required</sup> <a name="isNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall"></a>

```java
public java.lang.Object getIsNullCall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `parameterStyle`<sup>Required</sup> <a name="parameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle"></a>

```java
public java.lang.String getParameterStyle();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

---

##### `routineBody`<sup>Required</sup> <a name="routineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody"></a>

```java
public java.lang.String getRoutineBody();
```

- *Type:* java.lang.String

---

##### `routineDefinition`<sup>Required</sup> <a name="routineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition"></a>

```java
public java.lang.String getRoutineDefinition();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `securityType`<sup>Required</sup> <a name="securityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

---

##### `specificName`<sup>Required</sup> <a name="specificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName"></a>

```java
public java.lang.String getSpecificName();
```

- *Type:* java.lang.String

---

##### `sqlDataAccess`<sup>Required</sup> <a name="sqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess"></a>

```java
public java.lang.String getSqlDataAccess();
```

- *Type:* java.lang.String

---

##### `sqlPath`<sup>Required</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath"></a>

```java
public java.lang.String getSqlPath();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>

---


### DataDatabricksFunctionsFunctionsReturnParamsList <a name="DataDatabricksFunctionsFunctionsReturnParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParamsList;

new DataDatabricksFunctionsFunctionsReturnParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get"></a>

```java
public DataDatabricksFunctionsFunctionsReturnParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>>

---


### DataDatabricksFunctionsFunctionsReturnParamsOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference;

new DataDatabricksFunctionsFunctionsReturnParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsReturnParamsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput">parametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters"></a>

```java
public DataDatabricksFunctionsFunctionsReturnParamsParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput"></a>

```java
public java.lang.Object getParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersList <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParamsParametersList;

new DataDatabricksFunctionsFunctionsReturnParamsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get"></a>

```java
public DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>>

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference;

new DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault">resetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetParameterDefault` <a name="resetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault"></a>

```java
public void resetParameterDefault()
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode"></a>

```java
public void resetParameterMode()
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType"></a>

```java
public void resetParameterType()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput">parameterDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput">parameterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault">parameterDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterDefaultInput`<sup>Optional</sup> <a name="parameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput"></a>

```java
public java.lang.String getParameterDefaultInput();
```

- *Type:* java.lang.String

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput"></a>

```java
public java.lang.String getParameterModeInput();
```

- *Type:* java.lang.String

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput"></a>

```java
public java.lang.String getParameterTypeInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameterDefault`<sup>Required</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault"></a>

```java
public java.lang.String getParameterDefault();
```

- *Type:* java.lang.String

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">functionFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName">functionFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionFullNameInput`<sup>Optional</sup> <a name="functionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```java
public java.lang.String getFunctionFullNameInput();
```

- *Type:* java.lang.String

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```java
public java.lang.String getFunctionFullName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction"></a>

```java
public void putFunction(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable"></a>

```java
public void putTable(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>>

---

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable"></a>

```java
public void resetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput">functionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput">tableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList getFunction();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput"></a>

```java
public java.lang.Object getFunctionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput"></a>

```java
public java.lang.Object getTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference;

new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput">tableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName">tableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableFullNameInput`<sup>Optional</sup> <a name="tableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```java
public java.lang.String getTableFullNameInput();
```

- *Type:* java.lang.String

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```java
public java.lang.String getTableFullName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesList;

new DataDatabricksFunctionsFunctionsRoutineDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_functions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference;

new DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies"></a>

```java
public void putDependencies(IResolvable OR java.util.List<DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>>

---

##### `resetDependencies` <a name="resetDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies"></a>

```java
public void resetDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies"></a>

```java
public DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList getDependencies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput"></a>

```java
public java.lang.Object getDependenciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>

---



