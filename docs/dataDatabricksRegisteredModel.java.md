# `dataDatabricksRegisteredModel` Submodule <a name="`dataDatabricksRegisteredModel` Submodule" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRegisteredModel <a name="DataDatabricksRegisteredModel" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model databricks_registered_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModel;

DataDatabricksRegisteredModel.Builder.create(Construct scope, java.lang.String id)
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
    .fullName(java.lang.String)
//  .includeAliases(java.lang.Boolean)
//  .includeAliases(IResolvable)
//  .includeBrowse(java.lang.Boolean)
//  .includeBrowse(IResolvable)
//  .modelInfo(IResolvable)
//  .modelInfo(java.util.List<DataDatabricksRegisteredModelModelInfo>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeAliases">includeAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.modelInfo">modelInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.fullName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `includeAliases`<sup>Optional</sup> <a name="includeAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeAliases"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}.

---

##### `includeBrowse`<sup>Optional</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeBrowse"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}.

---

##### `modelInfo`<sup>Optional</sup> <a name="modelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.modelInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo">putModelInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeAliases">resetIncludeAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeBrowse">resetIncludeBrowse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetModelInfo">resetModelInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putModelInfo` <a name="putModelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo"></a>

```java
public void putModelInfo(IResolvable OR java.util.List<DataDatabricksRegisteredModelModelInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>>

---

##### `resetIncludeAliases` <a name="resetIncludeAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeAliases"></a>

```java
public void resetIncludeAliases()
```

##### `resetIncludeBrowse` <a name="resetIncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeBrowse"></a>

```java
public void resetIncludeBrowse()
```

##### `resetModelInfo` <a name="resetModelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetModelInfo"></a>

```java
public void resetModelInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRegisteredModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModel;

DataDatabricksRegisteredModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModel;

DataDatabricksRegisteredModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModel;

DataDatabricksRegisteredModel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModel;

DataDatabricksRegisteredModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksRegisteredModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksRegisteredModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksRegisteredModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksRegisteredModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRegisteredModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfo">modelInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList">DataDatabricksRegisteredModelModelInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliasesInput">includeAliasesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowseInput">includeBrowseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfoInput">modelInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliases">includeAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `modelInfo`<sup>Required</sup> <a name="modelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfo"></a>

```java
public DataDatabricksRegisteredModelModelInfoList getModelInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList">DataDatabricksRegisteredModelModelInfoList</a>

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `includeAliasesInput`<sup>Optional</sup> <a name="includeAliasesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliasesInput"></a>

```java
public java.lang.Object getIncludeAliasesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeBrowseInput`<sup>Optional</sup> <a name="includeBrowseInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowseInput"></a>

```java
public java.lang.Object getIncludeBrowseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `modelInfoInput`<sup>Optional</sup> <a name="modelInfoInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfoInput"></a>

```java
public java.lang.Object getModelInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `includeAliases`<sup>Required</sup> <a name="includeAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliases"></a>

```java
public java.lang.Object getIncludeAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeBrowse`<sup>Required</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowse"></a>

```java
public java.lang.Object getIncludeBrowse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRegisteredModelConfig <a name="DataDatabricksRegisteredModelConfig" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelConfig;

DataDatabricksRegisteredModelConfig.builder()
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
    .fullName(java.lang.String)
//  .includeAliases(java.lang.Boolean)
//  .includeAliases(IResolvable)
//  .includeBrowse(java.lang.Boolean)
//  .includeBrowse(IResolvable)
//  .modelInfo(IResolvable)
//  .modelInfo(java.util.List<DataDatabricksRegisteredModelModelInfo>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeAliases">includeAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeBrowse">includeBrowse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.modelInfo">modelInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `includeAliases`<sup>Optional</sup> <a name="includeAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeAliases"></a>

```java
public java.lang.Object getIncludeAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}.

---

##### `includeBrowse`<sup>Optional</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeBrowse"></a>

```java
public java.lang.Object getIncludeBrowse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}.

---

##### `modelInfo`<sup>Optional</sup> <a name="modelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.modelInfo"></a>

```java
public java.lang.Object getModelInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}.

---

### DataDatabricksRegisteredModelModelInfo <a name="DataDatabricksRegisteredModelModelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfo;

DataDatabricksRegisteredModelModelInfo.builder()
//  .aliases(IResolvable)
//  .aliases(java.util.List<DataDatabricksRegisteredModelModelInfoAliases>)
//  .browseOnly(java.lang.Boolean)
//  .browseOnly(IResolvable)
//  .catalogName(java.lang.String)
//  .comment(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .fullName(java.lang.String)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .schemaName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.aliases">aliases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#aliases DataDatabricksRegisteredModel#aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#browse_only DataDatabricksRegisteredModel#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#catalog_name DataDatabricksRegisteredModel#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#comment DataDatabricksRegisteredModel#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#created_at DataDatabricksRegisteredModel#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#created_by DataDatabricksRegisteredModel#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#metastore_id DataDatabricksRegisteredModel#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#name DataDatabricksRegisteredModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#owner DataDatabricksRegisteredModel#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#schema_name DataDatabricksRegisteredModel#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#storage_location DataDatabricksRegisteredModel#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#updated_at DataDatabricksRegisteredModel#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#updated_by DataDatabricksRegisteredModel#updated_by}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.aliases"></a>

```java
public java.lang.Object getAliases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#aliases DataDatabricksRegisteredModel#aliases}.

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.browseOnly"></a>

```java
public java.lang.Object getBrowseOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#browse_only DataDatabricksRegisteredModel#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#catalog_name DataDatabricksRegisteredModel#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#comment DataDatabricksRegisteredModel#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#created_at DataDatabricksRegisteredModel#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#created_by DataDatabricksRegisteredModel#created_by}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#metastore_id DataDatabricksRegisteredModel#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#name DataDatabricksRegisteredModel#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#owner DataDatabricksRegisteredModel#owner}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#schema_name DataDatabricksRegisteredModel#schema_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#storage_location DataDatabricksRegisteredModel#storage_location}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#updated_at DataDatabricksRegisteredModel#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#updated_by DataDatabricksRegisteredModel#updated_by}.

---

### DataDatabricksRegisteredModelModelInfoAliases <a name="DataDatabricksRegisteredModelModelInfoAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfoAliases;

DataDatabricksRegisteredModelModelInfoAliases.builder()
//  .aliasName(java.lang.String)
//  .versionNum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#alias_name DataDatabricksRegisteredModel#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.versionNum">versionNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#version_num DataDatabricksRegisteredModel#version_num}. |

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#alias_name DataDatabricksRegisteredModel#alias_name}.

---

##### `versionNum`<sup>Optional</sup> <a name="versionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.versionNum"></a>

```java
public java.lang.Number getVersionNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/registered_model#version_num DataDatabricksRegisteredModel#version_num}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRegisteredModelModelInfoAliasesList <a name="DataDatabricksRegisteredModelModelInfoAliasesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfoAliasesList;

new DataDatabricksRegisteredModelModelInfoAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get"></a>

```java
public DataDatabricksRegisteredModelModelInfoAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>>

---


### DataDatabricksRegisteredModelModelInfoAliasesOutputReference <a name="DataDatabricksRegisteredModelModelInfoAliasesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfoAliasesOutputReference;

new DataDatabricksRegisteredModelModelInfoAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetVersionNum">resetVersionNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasName` <a name="resetAliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetAliasName"></a>

```java
public void resetAliasName()
```

##### `resetVersionNum` <a name="resetVersionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetVersionNum"></a>

```java
public void resetVersionNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNumInput">versionNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNum">versionNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `versionNumInput`<sup>Optional</sup> <a name="versionNumInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNumInput"></a>

```java
public java.lang.Number getVersionNumInput();
```

- *Type:* java.lang.Number

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `versionNum`<sup>Required</sup> <a name="versionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNum"></a>

```java
public java.lang.Number getVersionNum();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>

---


### DataDatabricksRegisteredModelModelInfoList <a name="DataDatabricksRegisteredModelModelInfoList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfoList;

new DataDatabricksRegisteredModelModelInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get"></a>

```java
public DataDatabricksRegisteredModelModelInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>>

---


### DataDatabricksRegisteredModelModelInfoOutputReference <a name="DataDatabricksRegisteredModelModelInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_registered_model.DataDatabricksRegisteredModelModelInfoOutputReference;

new DataDatabricksRegisteredModelModelInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAliases` <a name="putAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases"></a>

```java
public void putAliases(IResolvable OR java.util.List<DataDatabricksRegisteredModelModelInfoAliases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>>

---

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetBrowseOnly"></a>

```java
public void resetBrowseOnly()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetStorageLocation"></a>

```java
public void resetStorageLocation()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList">DataDatabricksRegisteredModelModelInfoAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliases"></a>

```java
public DataDatabricksRegisteredModelModelInfoAliasesList getAliases();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList">DataDatabricksRegisteredModelModelInfoAliasesList</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliasesInput"></a>

```java
public java.lang.Object getAliasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnlyInput"></a>

```java
public java.lang.Object getBrowseOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocationInput"></a>

```java
public java.lang.String getStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnly"></a>

```java
public java.lang.Object getBrowseOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>

---



