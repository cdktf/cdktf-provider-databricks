# `dataDatabricksCurrentMetastore` Submodule <a name="`dataDatabricksCurrentMetastore` Submodule" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCurrentMetastore <a name="DataDatabricksCurrentMetastore" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore databricks_current_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastore;

DataDatabricksCurrentMetastore.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .metastoreInfo(DataDatabricksCurrentMetastoreMetastoreInfo)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | metastore_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreInfo`<sup>Optional</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.metastoreInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#metastore_info DataDatabricksCurrentMetastore#metastore_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo">putMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo">resetMetastoreInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetastoreInfo` <a name="putMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo"></a>

```java
public void putMetastoreInfo(DataDatabricksCurrentMetastoreMetastoreInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreInfo` <a name="resetMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo"></a>

```java
public void resetMetastoreInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastore;

DataDatabricksCurrentMetastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastore;

DataDatabricksCurrentMetastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastore;

DataDatabricksCurrentMetastore.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastore;

DataDatabricksCurrentMetastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksCurrentMetastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksCurrentMetastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksCurrentMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCurrentMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput">metastoreInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metastoreInfo`<sup>Required</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo"></a>

```java
public DataDatabricksCurrentMetastoreMetastoreInfoOutputReference getMetastoreInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreInfoInput`<sup>Optional</sup> <a name="metastoreInfoInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput"></a>

```java
public DataDatabricksCurrentMetastoreMetastoreInfo getMetastoreInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCurrentMetastoreConfig <a name="DataDatabricksCurrentMetastoreConfig" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastoreConfig;

DataDatabricksCurrentMetastoreConfig.builder()
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
//  .id(java.lang.String)
//  .metastoreInfo(DataDatabricksCurrentMetastoreMetastoreInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | metastore_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreInfo`<sup>Optional</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo"></a>

```java
public DataDatabricksCurrentMetastoreMetastoreInfo getMetastoreInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#metastore_info DataDatabricksCurrentMetastore#metastore_info}

---

### DataDatabricksCurrentMetastoreMetastoreInfo <a name="DataDatabricksCurrentMetastoreMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastoreMetastoreInfo;

DataDatabricksCurrentMetastoreMetastoreInfo.builder()
//  .cloud(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .defaultDataAccessConfigId(java.lang.String)
//  .deltaSharingOrganizationName(java.lang.String)
//  .deltaSharingRecipientTokenLifetimeInSeconds(java.lang.Number)
//  .deltaSharingScope(java.lang.String)
//  .externalAccessEnabled(java.lang.Boolean)
//  .externalAccessEnabled(IResolvable)
//  .globalMetastoreId(java.lang.String)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .privilegeModelVersion(java.lang.String)
//  .region(java.lang.String)
//  .storageRoot(java.lang.String)
//  .storageRootCredentialId(java.lang.String)
//  .storageRootCredentialName(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud">cloud</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId">globalMetastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}. |

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}.

---

##### `defaultDataAccessConfigId`<sup>Optional</sup> <a name="defaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}.

---

##### `deltaSharingOrganizationName`<sup>Optional</sup> <a name="deltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}.

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `deltaSharingScope`<sup>Optional</sup> <a name="deltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled"></a>

```java
public java.lang.Object getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```java
public java.lang.String getGlobalMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}.

---

##### `privilegeModelVersion`<sup>Optional</sup> <a name="privilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}.

---

##### `storageRootCredentialId`<sup>Optional</sup> <a name="storageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}.

---

##### `storageRootCredentialName`<sup>Optional</sup> <a name="storageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCurrentMetastoreMetastoreInfoOutputReference <a name="DataDatabricksCurrentMetastoreMetastoreInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_current_metastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference;

new DataDatabricksCurrentMetastoreMetastoreInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">resetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">resetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">resetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">resetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled">resetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">resetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">resetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">resetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```java
public void resetCloud()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDefaultDataAccessConfigId` <a name="resetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```java
public void resetDefaultDataAccessConfigId()
```

##### `resetDeltaSharingOrganizationName` <a name="resetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```java
public void resetDeltaSharingOrganizationName()
```

##### `resetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="resetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public void resetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `resetDeltaSharingScope` <a name="resetDeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```java
public void resetDeltaSharingScope()
```

##### `resetExternalAccessEnabled` <a name="resetExternalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled"></a>

```java
public void resetExternalAccessEnabled()
```

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```java
public void resetGlobalMetastoreId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPrivilegeModelVersion` <a name="resetPrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```java
public void resetPrivilegeModelVersion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```java
public void resetStorageRoot()
```

##### `resetStorageRootCredentialId` <a name="resetStorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```java
public void resetStorageRootCredentialId()
```

##### `resetStorageRootCredentialName` <a name="resetStorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```java
public void resetStorageRootCredentialName()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput">cloudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">defaultDataAccessConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">deltaSharingOrganizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">deltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">deltaSharingScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput">externalAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">privilegeModelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">storageRootCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">storageRootCredentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput">storageRootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```java
public java.lang.String getCloudInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="defaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```java
public java.lang.String getDefaultDataAccessConfigIdInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="deltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```java
public java.lang.String getDeltaSharingOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScopeInput`<sup>Optional</sup> <a name="deltaSharingScopeInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```java
public java.lang.String getDeltaSharingScopeInput();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabledInput`<sup>Optional</sup> <a name="externalAccessEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput"></a>

```java
public java.lang.Object getExternalAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```java
public java.lang.String getGlobalMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersionInput`<sup>Optional</sup> <a name="privilegeModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```java
public java.lang.String getPrivilegeModelVersionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialIdInput`<sup>Optional</sup> <a name="storageRootCredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```java
public java.lang.String getStorageRootCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialNameInput`<sup>Optional</sup> <a name="storageRootCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```java
public java.lang.String getStorageRootCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```java
public java.lang.String getStorageRootInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigId`<sup>Required</sup> <a name="defaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationName`<sup>Required</sup> <a name="deltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScope`<sup>Required</sup> <a name="deltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled"></a>

```java
public java.lang.Object getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```java
public java.lang.String getGlobalMetastoreId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersion`<sup>Required</sup> <a name="privilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialId`<sup>Required</sup> <a name="storageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialName`<sup>Required</sup> <a name="storageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```java
public DataDatabricksCurrentMetastoreMetastoreInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---



