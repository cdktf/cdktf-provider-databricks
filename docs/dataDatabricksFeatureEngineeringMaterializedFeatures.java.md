# `dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeatures.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .featureName(java.lang.String)
//  .pageSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.featureName">featureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.featureName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName"></a>

```java
public void resetFeatureName()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize"></a>

```java
public void resetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures">materializedFeatures</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput">featureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `materializedFeatures`<sup>Required</sup> <a name="materializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList getMaterializedFeatures();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a>

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput"></a>

```java
public java.lang.String getFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig;

DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .featureName(java.lang.String)
//  .pageSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName">featureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures;

DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.builder()
    .materializedFeatureId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId">materializedFeatureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}. |

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId"></a>

```java
public java.lang.String getMaterializedFeatureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig;

DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.builder()
    .catalogName(java.lang.String)
    .schemaName(java.lang.String)
    .tableNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}.

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig;

DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.builder()
    .capacity(java.lang.String)
    .name(java.lang.String)
//  .readReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity">capacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount">readReplicaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity"></a>

```java
public java.lang.String getCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}.

---

##### `readReplicaCount`<sup>Optional</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount"></a>

```java
public java.lang.Number getReadReplicaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```java
public java.lang.String getTableNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount">resetReadReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadReplicaCount` <a name="resetReadReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```java
public void resetReadReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput">readReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount">readReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput"></a>

```java
public java.lang.String getCapacityInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readReplicaCountInput`<sup>Optional</sup> <a name="readReplicaCountInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```java
public java.lang.Number getReadReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity"></a>

```java
public java.lang.String getCapacity();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readReplicaCount`<sup>Required</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```java
public java.lang.Number getReadReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_feature_engineering_materialized_features.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime">lastMaterializationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState">pipelineScheduleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput">materializedFeatureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId">materializedFeatureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `lastMaterializationTime`<sup>Required</sup> <a name="lastMaterializationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime"></a>

```java
public java.lang.String getLastMaterializationTime();
```

- *Type:* java.lang.String

---

##### `offlineStoreConfig`<sup>Required</sup> <a name="offlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference getOfflineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a>

---

##### `onlineStoreConfig`<sup>Required</sup> <a name="onlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference getOnlineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a>

---

##### `pipelineScheduleState`<sup>Required</sup> <a name="pipelineScheduleState" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState"></a>

```java
public java.lang.String getPipelineScheduleState();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `materializedFeatureIdInput`<sup>Optional</sup> <a name="materializedFeatureIdInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput"></a>

```java
public java.lang.String getMaterializedFeatureIdInput();
```

- *Type:* java.lang.String

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId"></a>

```java
public java.lang.String getMaterializedFeatureId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue"></a>

```java
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>

---



