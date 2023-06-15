# `data_databricks_cluster_policy`

Refer to the Terraform Registory for docs: [`data_databricks_cluster_policy`](https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy).

# `dataDatabricksClusterPolicy` Submodule <a name="`dataDatabricksClusterPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusterPolicy <a name="DataDatabricksClusterPolicy" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_cluster_policy.DataDatabricksClusterPolicy;

DataDatabricksClusterPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .definition(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .maxClustersPerUser(java.lang.Number)
//  .name(java.lang.String)
//  .policyFamilyDefinitionOverrides(java.lang.String)
//  .policyFamilyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.definition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}.

---

##### `maxClustersPerUser`<sup>Optional</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.maxClustersPerUser"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}.

---

##### `policyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.policyFamilyDefinitionOverrides"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}.

---

##### `policyFamilyId`<sup>Optional</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.policyFamilyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser">resetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides">resetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId">resetPolicyFamilyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetMaxClustersPerUser` <a name="resetMaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser"></a>

```java
public void resetMaxClustersPerUser()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName"></a>

```java
public void resetName()
```

##### `resetPolicyFamilyDefinitionOverrides` <a name="resetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```java
public void resetPolicyFamilyDefinitionOverrides()
```

##### `resetPolicyFamilyId` <a name="resetPolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId"></a>

```java
public void resetPolicyFamilyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_cluster_policy.DataDatabricksClusterPolicy;

DataDatabricksClusterPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_cluster_policy.DataDatabricksClusterPolicy;

DataDatabricksClusterPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_cluster_policy.DataDatabricksClusterPolicy;

DataDatabricksClusterPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput">maxClustersPerUserInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput">policyFamilyDefinitionOverridesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput">policyFamilyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxClustersPerUserInput`<sup>Optional</sup> <a name="maxClustersPerUserInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput"></a>

```java
public java.lang.Number getMaxClustersPerUserInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="policyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverridesInput();
```

- *Type:* java.lang.String

---

##### `policyFamilyIdInput`<sup>Optional</sup> <a name="policyFamilyIdInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput"></a>

```java
public java.lang.String getPolicyFamilyIdInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxClustersPerUser`<sup>Required</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser"></a>

```java
public java.lang.Number getMaxClustersPerUser();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyFamilyDefinitionOverrides`<sup>Required</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverrides();
```

- *Type:* java.lang.String

---

##### `policyFamilyId`<sup>Required</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId"></a>

```java
public java.lang.String getPolicyFamilyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClusterPolicyConfig <a name="DataDatabricksClusterPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_cluster_policy.DataDatabricksClusterPolicyConfig;

DataDatabricksClusterPolicyConfig.builder()
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
//  .definition(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .maxClustersPerUser(java.lang.Number)
//  .name(java.lang.String)
//  .policyFamilyDefinitionOverrides(java.lang.String)
//  .policyFamilyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}.

---

##### `maxClustersPerUser`<sup>Optional</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser"></a>

```java
public java.lang.Number getMaxClustersPerUser();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}.

---

##### `policyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverrides();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}.

---

##### `policyFamilyId`<sup>Optional</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId"></a>

```java
public java.lang.String getPolicyFamilyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}.

---



