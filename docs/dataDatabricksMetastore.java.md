# `dataDatabricksMetastore` Submodule <a name="`dataDatabricksMetastore` Submodule" id="@cdktf/provider-databricks.dataDatabricksMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMetastore <a name="DataDatabricksMetastore" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastore;

DataDatabricksMetastore.Builder.create(Construct scope, java.lang.String id)
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
//  .metastoreId(java.lang.String)
//  .metastoreInfo(DataDatabricksMetastoreMetastoreInfo)
//  .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | metastore_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `metastoreInfo`<sup>Optional</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.metastoreInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_info DataDatabricksMetastore#metastore_info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo">putMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo">resetMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetastoreInfo` <a name="putMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo"></a>

```java
public void putMetastoreInfo(DataDatabricksMetastoreMetastoreInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetMetastoreInfo` <a name="resetMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo"></a>

```java
public void resetMetastoreInfo()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMetastore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastore;

DataDatabricksMetastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastore;

DataDatabricksMetastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastore;

DataDatabricksMetastore.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastore;

DataDatabricksMetastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMetastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksMetastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMetastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput">metastoreInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metastoreInfo`<sup>Required</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo"></a>

```java
public DataDatabricksMetastoreMetastoreInfoOutputReference getMetastoreInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreInfoInput`<sup>Optional</sup> <a name="metastoreInfoInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput"></a>

```java
public DataDatabricksMetastoreMetastoreInfo getMetastoreInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMetastoreConfig <a name="DataDatabricksMetastoreConfig" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastoreConfig;

DataDatabricksMetastoreConfig.builder()
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
//  .metastoreId(java.lang.String)
//  .metastoreInfo(DataDatabricksMetastoreMetastoreInfo)
//  .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | metastore_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `metastoreInfo`<sup>Optional</sup> <a name="metastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo"></a>

```java
public DataDatabricksMetastoreMetastoreInfo getMetastoreInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_info DataDatabricksMetastore#metastore_info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

### DataDatabricksMetastoreMetastoreInfo <a name="DataDatabricksMetastoreMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastoreMetastoreInfo;

DataDatabricksMetastoreMetastoreInfo.builder()
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud">cloud</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#external_access_enabled DataDatabricksMetastore#external_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId">globalMetastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}. |

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}.

---

##### `defaultDataAccessConfigId`<sup>Optional</sup> <a name="defaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}.

---

##### `deltaSharingOrganizationName`<sup>Optional</sup> <a name="deltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}.

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `deltaSharingScope`<sup>Optional</sup> <a name="deltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.externalAccessEnabled"></a>

```java
public java.lang.Object getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#external_access_enabled DataDatabricksMetastore#external_access_enabled}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```java
public java.lang.String getGlobalMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}.

---

##### `privilegeModelVersion`<sup>Optional</sup> <a name="privilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}.

---

##### `storageRootCredentialId`<sup>Optional</sup> <a name="storageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}.

---

##### `storageRootCredentialName`<sup>Optional</sup> <a name="storageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMetastoreMetastoreInfoOutputReference <a name="DataDatabricksMetastoreMetastoreInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_metastore.DataDatabricksMetastoreMetastoreInfoOutputReference;

new DataDatabricksMetastoreMetastoreInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">resetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">resetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">resetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">resetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled">resetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">resetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">resetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">resetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```java
public void resetCloud()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDefaultDataAccessConfigId` <a name="resetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```java
public void resetDefaultDataAccessConfigId()
```

##### `resetDeltaSharingOrganizationName` <a name="resetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```java
public void resetDeltaSharingOrganizationName()
```

##### `resetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="resetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public void resetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `resetDeltaSharingScope` <a name="resetDeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```java
public void resetDeltaSharingScope()
```

##### `resetExternalAccessEnabled` <a name="resetExternalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled"></a>

```java
public void resetExternalAccessEnabled()
```

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```java
public void resetGlobalMetastoreId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPrivilegeModelVersion` <a name="resetPrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```java
public void resetPrivilegeModelVersion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```java
public void resetStorageRoot()
```

##### `resetStorageRootCredentialId` <a name="resetStorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```java
public void resetStorageRootCredentialId()
```

##### `resetStorageRootCredentialName` <a name="resetStorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```java
public void resetStorageRootCredentialName()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput">cloudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">defaultDataAccessConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">deltaSharingOrganizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">deltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">deltaSharingScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput">externalAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">privilegeModelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">storageRootCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">storageRootCredentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput">storageRootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```java
public java.lang.String getCloudInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="defaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```java
public java.lang.String getDefaultDataAccessConfigIdInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="deltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```java
public java.lang.String getDeltaSharingOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScopeInput`<sup>Optional</sup> <a name="deltaSharingScopeInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```java
public java.lang.String getDeltaSharingScopeInput();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabledInput`<sup>Optional</sup> <a name="externalAccessEnabledInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput"></a>

```java
public java.lang.Object getExternalAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```java
public java.lang.String getGlobalMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersionInput`<sup>Optional</sup> <a name="privilegeModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```java
public java.lang.String getPrivilegeModelVersionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialIdInput`<sup>Optional</sup> <a name="storageRootCredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```java
public java.lang.String getStorageRootCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialNameInput`<sup>Optional</sup> <a name="storageRootCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```java
public java.lang.String getStorageRootCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```java
public java.lang.String getStorageRootInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigId`<sup>Required</sup> <a name="defaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationName`<sup>Required</sup> <a name="deltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScope`<sup>Required</sup> <a name="deltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled"></a>

```java
public java.lang.Object getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```java
public java.lang.String getGlobalMetastoreId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersion`<sup>Required</sup> <a name="privilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialId`<sup>Required</sup> <a name="storageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialName`<sup>Required</sup> <a name="storageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```java
public DataDatabricksMetastoreMetastoreInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---



