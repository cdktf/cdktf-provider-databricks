# `dataDatabricksTable` Submodule <a name="`dataDatabricksTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTable <a name="DataDatabricksTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table databricks_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTable;

DataDatabricksTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tableInfo(DataDatabricksTableTableInfo)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#id DataDatabricksTable#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.tableInfo">tableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | table_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#id DataDatabricksTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tableInfo`<sup>Optional</sup> <a name="tableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.tableInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

table_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_info DataDatabricksTable#table_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo">putTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo">resetTableInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTableInfo` <a name="putTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo"></a>

```java
public void putTableInfo(DataDatabricksTableTableInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId"></a>

```java
public void resetId()
```

##### `resetTableInfo` <a name="resetTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo"></a>

```java
public void resetTableInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTable;

DataDatabricksTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTable;

DataDatabricksTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTable;

DataDatabricksTable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTable;

DataDatabricksTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo">tableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput">tableInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `tableInfo`<sup>Required</sup> <a name="tableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo"></a>

```java
public DataDatabricksTableTableInfoOutputReference getTableInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tableInfoInput`<sup>Optional</sup> <a name="tableInfoInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput"></a>

```java
public DataDatabricksTableTableInfo getTableInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTableConfig <a name="DataDatabricksTableConfig" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableConfig;

DataDatabricksTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tableInfo(DataDatabricksTableTableInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#id DataDatabricksTable#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo">tableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | table_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#id DataDatabricksTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tableInfo`<sup>Optional</sup> <a name="tableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo"></a>

```java
public DataDatabricksTableTableInfo getTableInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

table_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_info DataDatabricksTable#table_info}

---

### DataDatabricksTableTableInfo <a name="DataDatabricksTableTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfo;

DataDatabricksTableTableInfo.builder()
//  .accessPoint(java.lang.String)
//  .browseOnly(java.lang.Boolean|IResolvable)
//  .catalogName(java.lang.String)
//  .columns(IResolvable|java.util.List<DataDatabricksTableTableInfoColumns>)
//  .comment(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .dataAccessConfigurationId(java.lang.String)
//  .dataSourceFormat(java.lang.String)
//  .deletedAt(java.lang.Number)
//  .deltaRuntimePropertiesKvpairs(DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs)
//  .effectivePredictiveOptimizationFlag(DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag)
//  .enablePredictiveOptimization(java.lang.String)
//  .encryptionDetails(DataDatabricksTableTableInfoEncryptionDetails)
//  .fullName(java.lang.String)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .pipelineId(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .rowFilter(DataDatabricksTableTableInfoRowFilter)
//  .schemaName(java.lang.String)
//  .securableKindManifest(DataDatabricksTableTableInfoSecurableKindManifest)
//  .sqlPath(java.lang.String)
//  .storageCredentialName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .tableConstraints(IResolvable|java.util.List<DataDatabricksTableTableInfoTableConstraints>)
//  .tableId(java.lang.String)
//  .tableType(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
//  .viewDefinition(java.lang.String)
//  .viewDependencies(DataDatabricksTableTableInfoViewDependencies)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint">accessPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#access_point DataDatabricksTable#access_point}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns">columns</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>></code> | columns block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#created_at DataDatabricksTable#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#created_by DataDatabricksTable#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId">dataAccessConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat">dataSourceFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt">deletedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs">deltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | delta_runtime_properties_kvpairs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#full_name DataDatabricksTable#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#owner DataDatabricksTable#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#properties DataDatabricksTable#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | row_filter block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.securableKindManifest">securableKindManifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | securable_kind_manifest block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath">sqlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName">storageCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints">tableConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId">tableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_id DataDatabricksTable#table_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType">tableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_type DataDatabricksTable#table_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition">viewDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies">viewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | view_dependencies block. |

---

##### `accessPoint`<sup>Optional</sup> <a name="accessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint"></a>

```java
public java.lang.String getAccessPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#access_point DataDatabricksTable#access_point}.

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoColumns> getColumns();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>>

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#columns DataDatabricksTable#columns}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#created_at DataDatabricksTable#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#created_by DataDatabricksTable#created_by}.

---

##### `dataAccessConfigurationId`<sup>Optional</sup> <a name="dataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId"></a>

```java
public java.lang.String getDataAccessConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}.

---

##### `dataSourceFormat`<sup>Optional</sup> <a name="dataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat"></a>

```java
public java.lang.String getDataSourceFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}.

---

##### `deletedAt`<sup>Optional</sup> <a name="deletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt"></a>

```java
public java.lang.Number getDeletedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}.

---

##### `deltaRuntimePropertiesKvpairs`<sup>Optional</sup> <a name="deltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs"></a>

```java
public DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs getDeltaRuntimePropertiesKvpairs();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

delta_runtime_properties_kvpairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#delta_runtime_properties_kvpairs DataDatabricksTable#delta_runtime_properties_kvpairs}

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag"></a>

```java
public DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag getEffectivePredictiveOptimizationFlag();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#effective_predictive_optimization_flag DataDatabricksTable#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization"></a>

```java
public java.lang.String getEnablePredictiveOptimization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}.

---

##### `encryptionDetails`<sup>Optional</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetails getEncryptionDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#encryption_details DataDatabricksTable#encryption_details}

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#full_name DataDatabricksTable#full_name}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#owner DataDatabricksTable#owner}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#properties DataDatabricksTable#properties}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter"></a>

```java
public DataDatabricksTableTableInfoRowFilter getRowFilter();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#row_filter DataDatabricksTable#row_filter}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}.

---

##### `securableKindManifest`<sup>Optional</sup> <a name="securableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.securableKindManifest"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifest getSecurableKindManifest();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

securable_kind_manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#securable_kind_manifest DataDatabricksTable#securable_kind_manifest}

---

##### `sqlPath`<sup>Optional</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath"></a>

```java
public java.lang.String getSqlPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}.

---

##### `storageCredentialName`<sup>Optional</sup> <a name="storageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName"></a>

```java
public java.lang.String getStorageCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}.

---

##### `tableConstraints`<sup>Optional</sup> <a name="tableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoTableConstraints> getTableConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_constraints DataDatabricksTable#table_constraints}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_id DataDatabricksTable#table_id}.

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_type DataDatabricksTable#table_type}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}.

---

##### `viewDefinition`<sup>Optional</sup> <a name="viewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition"></a>

```java
public java.lang.String getViewDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}.

---

##### `viewDependencies`<sup>Optional</sup> <a name="viewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies"></a>

```java
public DataDatabricksTableTableInfoViewDependencies getViewDependencies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

view_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#view_dependencies DataDatabricksTable#view_dependencies}

---

### DataDatabricksTableTableInfoColumns <a name="DataDatabricksTableTableInfoColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoColumns;

DataDatabricksTableTableInfoColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksTableTableInfoColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean|IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | mask block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#nullable DataDatabricksTable#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#position DataDatabricksTable#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_json DataDatabricksTable#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_name DataDatabricksTable#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_text DataDatabricksTable#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask"></a>

```java
public DataDatabricksTableTableInfoColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

mask block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#mask DataDatabricksTable#mask}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#nullable DataDatabricksTable#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#position DataDatabricksTable#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_json DataDatabricksTable#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_name DataDatabricksTable#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type_text DataDatabricksTable#type_text}.

---

### DataDatabricksTableTableInfoColumnsMask <a name="DataDatabricksTableTableInfoColumnsMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoColumnsMask;

DataDatabricksTableTableInfoColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}.

---

### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs;

DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.builder()
    .deltaRuntimeProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties">deltaRuntimeProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}. |

---

##### `deltaRuntimeProperties`<sup>Required</sup> <a name="deltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeltaRuntimeProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}.

---

### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag;

DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.builder()
    .value(java.lang.String)
//  .inheritedFromName(java.lang.String)
//  .inheritedFromType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#value DataDatabricksTable#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#value DataDatabricksTable#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```java
public java.lang.String getInheritedFromName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```java
public java.lang.String getInheritedFromType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}.

---

### DataDatabricksTableTableInfoEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEncryptionDetails;

DataDatabricksTableTableInfoEncryptionDetails.builder()
//  .sseEncryptionDetails(DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sseEncryptionDetails`<sup>Optional</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails getSseEncryptionDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#sse_encryption_details DataDatabricksTable#sse_encryption_details}

---

### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails;

DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.builder()
//  .algorithm(java.lang.String)
//  .awsKmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}.

---

### DataDatabricksTableTableInfoRowFilter <a name="DataDatabricksTableTableInfoRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoRowFilter;

DataDatabricksTableTableInfoRowFilter.builder()
    .functionName(java.lang.String)
    .inputColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames">inputColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `inputColumnNames`<sup>Required</sup> <a name="inputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames"></a>

```java
public java.util.List<java.lang.String> getInputColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}.

---

### DataDatabricksTableTableInfoSecurableKindManifest <a name="DataDatabricksTableTableInfoSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoSecurableKindManifest;

DataDatabricksTableTableInfoSecurableKindManifest.builder()
//  .assignablePrivileges(java.util.List<java.lang.String>)
//  .capabilities(java.util.List<java.lang.String>)
//  .options(IResolvable|java.util.List<DataDatabricksTableTableInfoSecurableKindManifestOptions>)
//  .securableKind(java.lang.String)
//  .securableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.assignablePrivileges">assignablePrivileges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#assignable_privileges DataDatabricksTable#assignable_privileges}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#capabilities DataDatabricksTable#capabilities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.options">options</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>></code> | options block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableKind">securableKind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#securable_kind DataDatabricksTable#securable_kind}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableType">securableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#securable_type DataDatabricksTable#securable_type}. |

---

##### `assignablePrivileges`<sup>Optional</sup> <a name="assignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.assignablePrivileges"></a>

```java
public java.util.List<java.lang.String> getAssignablePrivileges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#assignable_privileges DataDatabricksTable#assignable_privileges}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#capabilities DataDatabricksTable#capabilities}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.options"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoSecurableKindManifestOptions> getOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#options DataDatabricksTable#options}

---

##### `securableKind`<sup>Optional</sup> <a name="securableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableKind"></a>

```java
public java.lang.String getSecurableKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#securable_kind DataDatabricksTable#securable_kind}.

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#securable_type DataDatabricksTable#securable_type}.

---

### DataDatabricksTableTableInfoSecurableKindManifestOptions <a name="DataDatabricksTableTableInfoSecurableKindManifestOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoSecurableKindManifestOptions;

DataDatabricksTableTableInfoSecurableKindManifestOptions.builder()
//  .allowedValues(java.util.List<java.lang.String>)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .hint(java.lang.String)
//  .isCopiable(java.lang.Boolean|IResolvable)
//  .isCreatable(java.lang.Boolean|IResolvable)
//  .isHidden(java.lang.Boolean|IResolvable)
//  .isLoggable(java.lang.Boolean|IResolvable)
//  .isRequired(java.lang.Boolean|IResolvable)
//  .isSecret(java.lang.Boolean|IResolvable)
//  .isUpdatable(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .oauthStage(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#allowed_values DataDatabricksTable#allowed_values}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#default_value DataDatabricksTable#default_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#description DataDatabricksTable#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.hint">hint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#hint DataDatabricksTable#hint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCopiable">isCopiable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_copiable DataDatabricksTable#is_copiable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCreatable">isCreatable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_creatable DataDatabricksTable#is_creatable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_hidden DataDatabricksTable#is_hidden}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isLoggable">isLoggable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_loggable DataDatabricksTable#is_loggable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_required DataDatabricksTable#is_required}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isSecret">isSecret</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_secret DataDatabricksTable#is_secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isUpdatable">isUpdatable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_updatable DataDatabricksTable#is_updatable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.oauthStage">oauthStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#oauth_stage DataDatabricksTable#oauth_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type DataDatabricksTable#type}. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#allowed_values DataDatabricksTable#allowed_values}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#default_value DataDatabricksTable#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#description DataDatabricksTable#description}.

---

##### `hint`<sup>Optional</sup> <a name="hint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.hint"></a>

```java
public java.lang.String getHint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#hint DataDatabricksTable#hint}.

---

##### `isCopiable`<sup>Optional</sup> <a name="isCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCopiable"></a>

```java
public java.lang.Boolean|IResolvable getIsCopiable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_copiable DataDatabricksTable#is_copiable}.

---

##### `isCreatable`<sup>Optional</sup> <a name="isCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCreatable"></a>

```java
public java.lang.Boolean|IResolvable getIsCreatable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_creatable DataDatabricksTable#is_creatable}.

---

##### `isHidden`<sup>Optional</sup> <a name="isHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isHidden"></a>

```java
public java.lang.Boolean|IResolvable getIsHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_hidden DataDatabricksTable#is_hidden}.

---

##### `isLoggable`<sup>Optional</sup> <a name="isLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isLoggable"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_loggable DataDatabricksTable#is_loggable}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_required DataDatabricksTable#is_required}.

---

##### `isSecret`<sup>Optional</sup> <a name="isSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsSecret();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_secret DataDatabricksTable#is_secret}.

---

##### `isUpdatable`<sup>Optional</sup> <a name="isUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isUpdatable"></a>

```java
public java.lang.Boolean|IResolvable getIsUpdatable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#is_updatable DataDatabricksTable#is_updatable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `oauthStage`<sup>Optional</sup> <a name="oauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.oauthStage"></a>

```java
public java.lang.String getOauthStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#oauth_stage DataDatabricksTable#oauth_stage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#type DataDatabricksTable#type}.

---

### DataDatabricksTableTableInfoTableConstraints <a name="DataDatabricksTableTableInfoTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraints;

DataDatabricksTableTableInfoTableConstraints.builder()
//  .foreignKeyConstraint(DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint)
//  .namedTableConstraint(DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint)
//  .primaryKeyConstraint(DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | foreign_key_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint">namedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | named_table_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | primary_key_constraint block. |

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint getForeignKeyConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#foreign_key_constraint DataDatabricksTable#foreign_key_constraint}

---

##### `namedTableConstraint`<sup>Optional</sup> <a name="namedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint getNamedTableConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

named_table_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#named_table_constraint DataDatabricksTable#named_table_constraint}

---

##### `primaryKeyConstraint`<sup>Optional</sup> <a name="primaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint getPrimaryKeyConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#primary_key_constraint DataDatabricksTable#primary_key_constraint}

---

### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint;

DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.builder()
    .childColumns(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .parentColumns(java.util.List<java.lang.String>)
    .parentTable(java.lang.String)
//  .rely(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns">parentColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable">parentTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.rely">rely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#rely DataDatabricksTable#rely}. |

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `parentColumns`<sup>Required</sup> <a name="parentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns"></a>

```java
public java.util.List<java.lang.String> getParentColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}.

---

##### `parentTable`<sup>Required</sup> <a name="parentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable"></a>

```java
public java.lang.String getParentTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}.

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.rely"></a>

```java
public java.lang.Boolean|IResolvable getRely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#rely DataDatabricksTable#rely}.

---

### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint;

DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint;

DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.builder()
    .childColumns(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .rely(java.lang.Boolean|IResolvable)
//  .timeseriesColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.rely">rely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#rely DataDatabricksTable#rely}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns">timeseriesColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}. |

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.rely"></a>

```java
public java.lang.Boolean|IResolvable getRely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#rely DataDatabricksTable#rely}.

---

##### `timeseriesColumns`<sup>Optional</sup> <a name="timeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns"></a>

```java
public java.util.List<java.lang.String> getTimeseriesColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}.

---

### DataDatabricksTableTableInfoViewDependencies <a name="DataDatabricksTableTableInfoViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependencies;

DataDatabricksTableTableInfoViewDependencies.builder()
//  .dependencies(IResolvable|java.util.List<DataDatabricksTableTableInfoViewDependenciesDependencies>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies">dependencies</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>></code> | dependencies block. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoViewDependenciesDependencies> getDependencies();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>>

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#dependencies DataDatabricksTable#dependencies}

---

### DataDatabricksTableTableInfoViewDependenciesDependencies <a name="DataDatabricksTableTableInfoViewDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependencies;

DataDatabricksTableTableInfoViewDependenciesDependencies.builder()
//  .connection(DataDatabricksTableTableInfoViewDependenciesDependenciesConnection)
//  .credential(DataDatabricksTableTableInfoViewDependenciesDependenciesCredential)
//  .function(DataDatabricksTableTableInfoViewDependenciesDependenciesFunction)
//  .table(DataDatabricksTableTableInfoViewDependenciesDependenciesTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | connection block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | function block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | table block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.connection"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesConnection getConnection();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#connection DataDatabricksTable#connection}

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.credential"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesCredential getCredential();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#credential DataDatabricksTable#credential}

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesFunction getFunction();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function DataDatabricksTable#function}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesTable getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table DataDatabricksTable#table}

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesConnection <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection;

DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.builder()
//  .connectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#connection_name DataDatabricksTable#connection_name}. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#connection_name DataDatabricksTable#connection_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesCredential <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential;

DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.builder()
//  .credentialName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#credential_name DataDatabricksTable#credential_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#credential_name DataDatabricksTable#credential_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesFunction <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction;

DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.builder()
    .functionFullName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName">functionFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}. |

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName"></a>

```java
public java.lang.String getFunctionFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesTable <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesTable;

DataDatabricksTableTableInfoViewDependenciesDependenciesTable.builder()
    .tableFullName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName">tableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}. |

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName"></a>

```java
public java.lang.String getTableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTableTableInfoColumnsList <a name="DataDatabricksTableTableInfoColumnsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoColumnsList;

new DataDatabricksTableTableInfoColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get"></a>

```java
public DataDatabricksTableTableInfoColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoColumns> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>>

---


### DataDatabricksTableTableInfoColumnsMaskOutputReference <a name="DataDatabricksTableTableInfoColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoColumnsMaskOutputReference;

new DataDatabricksTableTableInfoColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoColumnsMask getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---


### DataDatabricksTableTableInfoColumnsOutputReference <a name="DataDatabricksTableTableInfoColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoColumnsOutputReference;

new DataDatabricksTableTableInfoColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksTableTableInfoColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput">maskInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksTableTableInfoColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput"></a>

```java
public DataDatabricksTableTableInfoColumnsMask getMaskInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Boolean|IResolvable getNullableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksTableTableInfoColumns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>

---


### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference;

new DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput">deltaRuntimePropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties">deltaRuntimeProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaRuntimePropertiesInput`<sup>Optional</sup> <a name="deltaRuntimePropertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeltaRuntimePropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deltaRuntimeProperties`<sup>Required</sup> <a name="deltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeltaRuntimeProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---


### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference;

new DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```java
public void resetInheritedFromName()
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```java
public void resetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```java
public java.lang.String getInheritedFromNameInput();
```

- *Type:* java.lang.String

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```java
public java.lang.String getInheritedFromTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```java
public java.lang.String getInheritedFromName();
```

- *Type:* java.lang.String

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```java
public java.lang.String getInheritedFromType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEncryptionDetailsOutputReference;

new DataDatabricksTableTableInfoEncryptionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">putSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">resetSseEncryptionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseEncryptionDetails` <a name="putSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```java
public void putSseEncryptionDetails(DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `resetSseEncryptionDetails` <a name="resetSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```java
public void resetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sseEncryptionDetails`<sup>Required</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference getSseEncryptionDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sseEncryptionDetailsInput`<sup>Optional</sup> <a name="sseEncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails getSseEncryptionDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference;

new DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```java
public void resetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```java
public java.lang.String getAwsKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksTableTableInfoOutputReference <a name="DataDatabricksTableTableInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoOutputReference;

new DataDatabricksTableTableInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs">putDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails">putEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest">putSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints">putTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies">putViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint">resetAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId">resetDataAccessConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat">resetDataSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt">resetDeletedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs">resetDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails">resetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSecurableKindManifest">resetSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath">resetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName">resetStorageCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints">resetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId">resetTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType">resetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition">resetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies">resetViewDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<DataDatabricksTableTableInfoColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>>

---

##### `putDeltaRuntimePropertiesKvpairs` <a name="putDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs"></a>

```java
public void putDeltaRuntimePropertiesKvpairs(DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```java
public void putEffectivePredictiveOptimizationFlag(DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `putEncryptionDetails` <a name="putEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails"></a>

```java
public void putEncryptionDetails(DataDatabricksTableTableInfoEncryptionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter"></a>

```java
public void putRowFilter(DataDatabricksTableTableInfoRowFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `putSecurableKindManifest` <a name="putSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest"></a>

```java
public void putSecurableKindManifest(DataDatabricksTableTableInfoSecurableKindManifest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---

##### `putTableConstraints` <a name="putTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints"></a>

```java
public void putTableConstraints(IResolvable|java.util.List<DataDatabricksTableTableInfoTableConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>>

---

##### `putViewDependencies` <a name="putViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies"></a>

```java
public void putViewDependencies(DataDatabricksTableTableInfoViewDependencies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `resetAccessPoint` <a name="resetAccessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint"></a>

```java
public void resetAccessPoint()
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly"></a>

```java
public void resetBrowseOnly()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetColumns` <a name="resetColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDataAccessConfigurationId` <a name="resetDataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId"></a>

```java
public void resetDataAccessConfigurationId()
```

##### `resetDataSourceFormat` <a name="resetDataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat"></a>

```java
public void resetDataSourceFormat()
```

##### `resetDeletedAt` <a name="resetDeletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt"></a>

```java
public void resetDeletedAt()
```

##### `resetDeltaRuntimePropertiesKvpairs` <a name="resetDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs"></a>

```java
public void resetDeltaRuntimePropertiesKvpairs()
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```java
public void resetEffectivePredictiveOptimizationFlag()
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization"></a>

```java
public void resetEnablePredictiveOptimization()
```

##### `resetEncryptionDetails` <a name="resetEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails"></a>

```java
public void resetEncryptionDetails()
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId"></a>

```java
public void resetPipelineId()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter"></a>

```java
public void resetRowFilter()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSecurableKindManifest` <a name="resetSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSecurableKindManifest"></a>

```java
public void resetSecurableKindManifest()
```

##### `resetSqlPath` <a name="resetSqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath"></a>

```java
public void resetSqlPath()
```

##### `resetStorageCredentialName` <a name="resetStorageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName"></a>

```java
public void resetStorageCredentialName()
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation"></a>

```java
public void resetStorageLocation()
```

##### `resetTableConstraints` <a name="resetTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints"></a>

```java
public void resetTableConstraints()
```

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId"></a>

```java
public void resetTableId()
```

##### `resetTableType` <a name="resetTableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType"></a>

```java
public void resetTableType()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```

##### `resetViewDefinition` <a name="resetViewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition"></a>

```java
public void resetViewDefinition()
```

##### `resetViewDependencies` <a name="resetViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies"></a>

```java
public void resetViewDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs">deltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifest">securableKindManifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference">DataDatabricksTableTableInfoSecurableKindManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints">tableConstraints</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies">viewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput">accessPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput">columnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput">dataAccessConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput">dataSourceFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput">deletedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput">deltaRuntimePropertiesKvpairsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput">encryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifestInput">securableKindManifestInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput">sqlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput">storageCredentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput">tableConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput">tableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput">viewDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput">viewDependenciesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint">accessPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId">dataAccessConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat">dataSourceFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt">deletedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath">sqlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName">storageCredentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType">tableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition">viewDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns"></a>

```java
public DataDatabricksTableTableInfoColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a>

---

##### `deltaRuntimePropertiesKvpairs`<sup>Required</sup> <a name="deltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs"></a>

```java
public DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference getDeltaRuntimePropertiesKvpairs();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a>

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```java
public DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference getEffectivePredictiveOptimizationFlag();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `encryptionDetails`<sup>Required</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetailsOutputReference getEncryptionDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter"></a>

```java
public DataDatabricksTableTableInfoRowFilterOutputReference getRowFilter();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a>

---

##### `securableKindManifest`<sup>Required</sup> <a name="securableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifest"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifestOutputReference getSecurableKindManifest();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference">DataDatabricksTableTableInfoSecurableKindManifestOutputReference</a>

---

##### `tableConstraints`<sup>Required</sup> <a name="tableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsList getTableConstraints();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a>

---

##### `viewDependencies`<sup>Required</sup> <a name="viewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesOutputReference getViewDependencies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a>

---

##### `accessPointInput`<sup>Optional</sup> <a name="accessPointInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput"></a>

```java
public java.lang.String getAccessPointInput();
```

- *Type:* java.lang.String

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnlyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoColumns> getColumnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `dataAccessConfigurationIdInput`<sup>Optional</sup> <a name="dataAccessConfigurationIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput"></a>

```java
public java.lang.String getDataAccessConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceFormatInput`<sup>Optional</sup> <a name="dataSourceFormatInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput"></a>

```java
public java.lang.String getDataSourceFormatInput();
```

- *Type:* java.lang.String

---

##### `deletedAtInput`<sup>Optional</sup> <a name="deletedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput"></a>

```java
public java.lang.Number getDeletedAtInput();
```

- *Type:* java.lang.Number

---

##### `deltaRuntimePropertiesKvpairsInput`<sup>Optional</sup> <a name="deltaRuntimePropertiesKvpairsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput"></a>

```java
public DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs getDeltaRuntimePropertiesKvpairsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```java
public DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag getEffectivePredictiveOptimizationFlagInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```java
public java.lang.String getEnablePredictiveOptimizationInput();
```

- *Type:* java.lang.String

---

##### `encryptionDetailsInput`<sup>Optional</sup> <a name="encryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput"></a>

```java
public DataDatabricksTableTableInfoEncryptionDetails getEncryptionDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput"></a>

```java
public DataDatabricksTableTableInfoRowFilter getRowFilterInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `securableKindManifestInput`<sup>Optional</sup> <a name="securableKindManifestInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifestInput"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifest getSecurableKindManifestInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---

##### `sqlPathInput`<sup>Optional</sup> <a name="sqlPathInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput"></a>

```java
public java.lang.String getSqlPathInput();
```

- *Type:* java.lang.String

---

##### `storageCredentialNameInput`<sup>Optional</sup> <a name="storageCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput"></a>

```java
public java.lang.String getStorageCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput"></a>

```java
public java.lang.String getStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `tableConstraintsInput`<sup>Optional</sup> <a name="tableConstraintsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoTableConstraints> getTableConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>>

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput"></a>

```java
public java.lang.String getTableTypeInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `viewDefinitionInput`<sup>Optional</sup> <a name="viewDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput"></a>

```java
public java.lang.String getViewDefinitionInput();
```

- *Type:* java.lang.String

---

##### `viewDependenciesInput`<sup>Optional</sup> <a name="viewDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput"></a>

```java
public DataDatabricksTableTableInfoViewDependencies getViewDependenciesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `accessPoint`<sup>Required</sup> <a name="accessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint"></a>

```java
public java.lang.String getAccessPoint();
```

- *Type:* java.lang.String

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `dataAccessConfigurationId`<sup>Required</sup> <a name="dataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId"></a>

```java
public java.lang.String getDataAccessConfigurationId();
```

- *Type:* java.lang.String

---

##### `dataSourceFormat`<sup>Required</sup> <a name="dataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat"></a>

```java
public java.lang.String getDataSourceFormat();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt"></a>

```java
public java.lang.Number getDeletedAt();
```

- *Type:* java.lang.Number

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization"></a>

```java
public java.lang.String getEnablePredictiveOptimization();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sqlPath`<sup>Required</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath"></a>

```java
public java.lang.String getSqlPath();
```

- *Type:* java.lang.String

---

##### `storageCredentialName`<sup>Required</sup> <a name="storageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName"></a>

```java
public java.lang.String getStorageCredentialName();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `viewDefinition`<sup>Required</sup> <a name="viewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition"></a>

```java
public java.lang.String getViewDefinition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---


### DataDatabricksTableTableInfoRowFilterOutputReference <a name="DataDatabricksTableTableInfoRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoRowFilterOutputReference;

new DataDatabricksTableTableInfoRowFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput">inputColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames">inputColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `inputColumnNamesInput`<sup>Optional</sup> <a name="inputColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getInputColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `inputColumnNames`<sup>Required</sup> <a name="inputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames"></a>

```java
public java.util.List<java.lang.String> getInputColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoRowFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---


### DataDatabricksTableTableInfoSecurableKindManifestOptionsList <a name="DataDatabricksTableTableInfoSecurableKindManifestOptionsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoSecurableKindManifestOptionsList;

new DataDatabricksTableTableInfoSecurableKindManifestOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoSecurableKindManifestOptions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>>

---


### DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference <a name="DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference;

new DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetHint">resetHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCopiable">resetIsCopiable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCreatable">resetIsCreatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsHidden">resetIsHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsLoggable">resetIsLoggable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsSecret">resetIsSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsUpdatable">resetIsUpdatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetOauthStage">resetOauthStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHint` <a name="resetHint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetHint"></a>

```java
public void resetHint()
```

##### `resetIsCopiable` <a name="resetIsCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCopiable"></a>

```java
public void resetIsCopiable()
```

##### `resetIsCreatable` <a name="resetIsCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCreatable"></a>

```java
public void resetIsCreatable()
```

##### `resetIsHidden` <a name="resetIsHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsHidden"></a>

```java
public void resetIsHidden()
```

##### `resetIsLoggable` <a name="resetIsLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsLoggable"></a>

```java
public void resetIsLoggable()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetIsSecret` <a name="resetIsSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsSecret"></a>

```java
public void resetIsSecret()
```

##### `resetIsUpdatable` <a name="resetIsUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsUpdatable"></a>

```java
public void resetIsUpdatable()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOauthStage` <a name="resetOauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetOauthStage"></a>

```java
public void resetOauthStage()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hintInput">hintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiableInput">isCopiableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatableInput">isCreatableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggableInput">isLoggableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecretInput">isSecretInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatableInput">isUpdatableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStageInput">oauthStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hint">hint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiable">isCopiable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatable">isCreatable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggable">isLoggable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecret">isSecret</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatable">isUpdatable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStage">oauthStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hintInput`<sup>Optional</sup> <a name="hintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hintInput"></a>

```java
public java.lang.String getHintInput();
```

- *Type:* java.lang.String

---

##### `isCopiableInput`<sup>Optional</sup> <a name="isCopiableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCopiableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isCreatableInput`<sup>Optional</sup> <a name="isCreatableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCreatableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHiddenInput"></a>

```java
public java.lang.Boolean|IResolvable getIsHiddenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isLoggableInput`<sup>Optional</sup> <a name="isLoggableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isSecretInput`<sup>Optional</sup> <a name="isSecretInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSecretInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isUpdatableInput`<sup>Optional</sup> <a name="isUpdatableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsUpdatableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthStageInput`<sup>Optional</sup> <a name="oauthStageInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStageInput"></a>

```java
public java.lang.String getOauthStageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hint"></a>

```java
public java.lang.String getHint();
```

- *Type:* java.lang.String

---

##### `isCopiable`<sup>Required</sup> <a name="isCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiable"></a>

```java
public java.lang.Boolean|IResolvable getIsCopiable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isCreatable`<sup>Required</sup> <a name="isCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatable"></a>

```java
public java.lang.Boolean|IResolvable getIsCreatable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHidden"></a>

```java
public java.lang.Boolean|IResolvable getIsHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isLoggable`<sup>Required</sup> <a name="isLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggable"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsSecret();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isUpdatable`<sup>Required</sup> <a name="isUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatable"></a>

```java
public java.lang.Boolean|IResolvable getIsUpdatable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthStage`<sup>Required</sup> <a name="oauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStage"></a>

```java
public java.lang.String getOauthStage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksTableTableInfoSecurableKindManifestOptions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>

---


### DataDatabricksTableTableInfoSecurableKindManifestOutputReference <a name="DataDatabricksTableTableInfoSecurableKindManifestOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoSecurableKindManifestOutputReference;

new DataDatabricksTableTableInfoSecurableKindManifestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetAssignablePrivileges">resetAssignablePrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableKind">resetSecurableKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableType">resetSecurableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions"></a>

```java
public void putOptions(IResolvable|java.util.List<DataDatabricksTableTableInfoSecurableKindManifestOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>>

---

##### `resetAssignablePrivileges` <a name="resetAssignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetAssignablePrivileges"></a>

```java
public void resetAssignablePrivileges()
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSecurableKind` <a name="resetSecurableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableKind"></a>

```java
public void resetSecurableKind()
```

##### `resetSecurableType` <a name="resetSecurableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableType"></a>

```java
public void resetSecurableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList">DataDatabricksTableTableInfoSecurableKindManifestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivilegesInput">assignablePrivilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.optionsInput">optionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKindInput">securableKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivileges">assignablePrivileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKind">securableKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.options"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifestOptionsList getOptions();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList">DataDatabricksTableTableInfoSecurableKindManifestOptionsList</a>

---

##### `assignablePrivilegesInput`<sup>Optional</sup> <a name="assignablePrivilegesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivilegesInput"></a>

```java
public java.util.List<java.lang.String> getAssignablePrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.optionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoSecurableKindManifestOptions> getOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>>

---

##### `securableKindInput`<sup>Optional</sup> <a name="securableKindInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKindInput"></a>

```java
public java.lang.String getSecurableKindInput();
```

- *Type:* java.lang.String

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableTypeInput"></a>

```java
public java.lang.String getSecurableTypeInput();
```

- *Type:* java.lang.String

---

##### `assignablePrivileges`<sup>Required</sup> <a name="assignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivileges"></a>

```java
public java.util.List<java.lang.String> getAssignablePrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKind"></a>

```java
public java.lang.String getSecurableKind();
```

- *Type:* java.lang.String

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoSecurableKindManifest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---


### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference;

new DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRely` <a name="resetRely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resetRely"></a>

```java
public void resetRely()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput">childColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput">parentColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput">parentTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns">parentColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable">parentTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.rely">rely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childColumnsInput`<sup>Optional</sup> <a name="childColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput"></a>

```java
public java.util.List<java.lang.String> getChildColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentColumnsInput`<sup>Optional</sup> <a name="parentColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput"></a>

```java
public java.util.List<java.lang.String> getParentColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parentTableInput`<sup>Optional</sup> <a name="parentTableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput"></a>

```java
public java.lang.String getParentTableInput();
```

- *Type:* java.lang.String

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.relyInput"></a>

```java
public java.lang.Boolean|IResolvable getRelyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentColumns`<sup>Required</sup> <a name="parentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns"></a>

```java
public java.util.List<java.lang.String> getParentColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parentTable`<sup>Required</sup> <a name="parentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable"></a>

```java
public java.lang.String getParentTable();
```

- *Type:* java.lang.String

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.rely"></a>

```java
public java.lang.Boolean|IResolvable getRely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsList <a name="DataDatabricksTableTableInfoTableConstraintsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsList;

new DataDatabricksTableTableInfoTableConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoTableConstraints> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>>

---


### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference;

new DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsOutputReference;

new DataDatabricksTableTableInfoTableConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint">putForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint">putNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint">putPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint">resetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint">resetNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint">resetPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForeignKeyConstraint` <a name="putForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint"></a>

```java
public void putForeignKeyConstraint(DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `putNamedTableConstraint` <a name="putNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint"></a>

```java
public void putNamedTableConstraint(DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `putPrimaryKeyConstraint` <a name="putPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint"></a>

```java
public void putPrimaryKeyConstraint(DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `resetForeignKeyConstraint` <a name="resetForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint"></a>

```java
public void resetForeignKeyConstraint()
```

##### `resetNamedTableConstraint` <a name="resetNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint"></a>

```java
public void resetNamedTableConstraint()
```

##### `resetPrimaryKeyConstraint` <a name="resetPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint"></a>

```java
public void resetPrimaryKeyConstraint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint">namedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput">foreignKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput">namedTableConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput">primaryKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `foreignKeyConstraint`<sup>Required</sup> <a name="foreignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference getForeignKeyConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a>

---

##### `namedTableConstraint`<sup>Required</sup> <a name="namedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference getNamedTableConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a>

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference getPrimaryKeyConstraint();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a>

---

##### `foreignKeyConstraintInput`<sup>Optional</sup> <a name="foreignKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint getForeignKeyConstraintInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `namedTableConstraintInput`<sup>Optional</sup> <a name="namedTableConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint getNamedTableConstraintInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `primaryKeyConstraintInput`<sup>Optional</sup> <a name="primaryKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint getPrimaryKeyConstraintInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksTableTableInfoTableConstraints getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>

---


### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference;

new DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns">resetTimeseriesColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRely` <a name="resetRely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetRely"></a>

```java
public void resetRely()
```

##### `resetTimeseriesColumns` <a name="resetTimeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns"></a>

```java
public void resetTimeseriesColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput">childColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput">timeseriesColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.rely">rely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns">timeseriesColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childColumnsInput`<sup>Optional</sup> <a name="childColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput"></a>

```java
public java.util.List<java.lang.String> getChildColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.relyInput"></a>

```java
public java.lang.Boolean|IResolvable getRelyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeseriesColumnsInput`<sup>Optional</sup> <a name="timeseriesColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput"></a>

```java
public java.util.List<java.lang.String> getTimeseriesColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.rely"></a>

```java
public java.lang.Boolean|IResolvable getRely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeseriesColumns`<sup>Required</sup> <a name="timeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns"></a>

```java
public java.util.List<java.lang.String> getTimeseriesColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference;

new DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesConnection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference;

new DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```java
public void resetCredentialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference;

new DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">functionFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName">functionFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionFullNameInput`<sup>Optional</sup> <a name="functionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```java
public java.lang.String getFunctionFullNameInput();
```

- *Type:* java.lang.String

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```java
public java.lang.String getFunctionFullName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesFunction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesList <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesList;

new DataDatabricksTableTableInfoViewDependenciesDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoViewDependenciesDependencies> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference;

new DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection">putConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnection` <a name="putConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection"></a>

```java
public void putConnection(DataDatabricksTableTableInfoViewDependenciesDependenciesConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---

##### `putCredential` <a name="putCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential"></a>

```java
public void putCredential(DataDatabricksTableTableInfoViewDependenciesDependenciesCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction"></a>

```java
public void putFunction(DataDatabricksTableTableInfoViewDependenciesDependenciesFunction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable"></a>

```java
public void putTable(DataDatabricksTableTableInfoViewDependenciesDependenciesTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetConnection"></a>

```java
public void resetConnection()
```

##### `resetCredential` <a name="resetCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetCredential"></a>

```java
public void resetCredential()
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable"></a>

```java
public void resetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connectionInput">connectionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput">functionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connection"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference getConnection();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference</a>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credential"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference getCredential();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference getFunction();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a>

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connectionInput"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesConnection getConnectionInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credentialInput"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesCredential getCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesFunction getFunctionInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesTable getTableInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksTableTableInfoViewDependenciesDependencies getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference;

new DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput">tableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName">tableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableFullNameInput`<sup>Optional</sup> <a name="tableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```java
public java.lang.String getTableFullNameInput();
```

- *Type:* java.lang.String

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```java
public java.lang.String getTableFullName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---


### DataDatabricksTableTableInfoViewDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_table.DataDatabricksTableTableInfoViewDependenciesOutputReference;

new DataDatabricksTableTableInfoViewDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies"></a>

```java
public void putDependencies(IResolvable|java.util.List<DataDatabricksTableTableInfoViewDependenciesDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>>

---

##### `resetDependencies` <a name="resetDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies"></a>

```java
public void resetDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies"></a>

```java
public DataDatabricksTableTableInfoViewDependenciesDependenciesList getDependencies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksTableTableInfoViewDependenciesDependencies> getDependenciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue"></a>

```java
public DataDatabricksTableTableInfoViewDependencies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---



