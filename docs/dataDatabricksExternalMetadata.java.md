# `dataDatabricksExternalMetadata` Submodule <a name="`dataDatabricksExternalMetadata` Submodule" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalMetadata <a name="DataDatabricksExternalMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata databricks_external_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadata;

DataDatabricksExternalMetadata.Builder.create(Construct scope, java.lang.String id)
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
    .entityType(java.lang.String)
    .name(java.lang.String)
    .systemType(java.lang.String)
//  .columns(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .url(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.systemType">systemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.systemType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.columns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetColumns` <a name="resetColumns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetUrl"></a>

```java
public void resetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadata;

DataDatabricksExternalMetadata.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadata;

DataDatabricksExternalMetadata.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadata;

DataDatabricksExternalMetadata.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadata;

DataDatabricksExternalMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksExternalMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksExternalMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksExternalMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemTypeInput">systemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType">systemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `systemTypeInput`<sup>Optional</sup> <a name="systemTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemTypeInput"></a>

```java
public java.lang.String getSystemTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalMetadataConfig <a name="DataDatabricksExternalMetadataConfig" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_external_metadata.DataDatabricksExternalMetadataConfig;

DataDatabricksExternalMetadataConfig.builder()
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
    .entityType(java.lang.String)
    .name(java.lang.String)
    .systemType(java.lang.String)
//  .columns(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.systemType">systemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}.

---



