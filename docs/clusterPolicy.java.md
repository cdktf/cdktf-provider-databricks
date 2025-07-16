# `clusterPolicy` Submodule <a name="`clusterPolicy` Submodule" id="@cdktf/provider-databricks.clusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterPolicy <a name="ClusterPolicy" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicy;

ClusterPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .libraries(IResolvable)
//  .libraries(java.util.List<ClusterPolicyLibraries>)
//  .maxClustersPerUser(java.lang.Number)
//  .name(java.lang.String)
//  .policyFamilyDefinitionOverrides(java.lang.String)
//  .policyFamilyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#description ClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#id ClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.libraries">libraries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>></code> | libraries block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#name ClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.definition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#description ClusterPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#id ClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.libraries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>>

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}

---

##### `maxClustersPerUser`<sup>Optional</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.maxClustersPerUser"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#name ClusterPolicy#name}.

---

##### `policyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.policyFamilyDefinitionOverrides"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}.

---

##### `policyFamilyId`<sup>Optional</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.policyFamilyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries">putLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries">resetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser">resetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides">resetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId">resetPolicyFamilyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLibraries` <a name="putLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries"></a>

```java
public void putLibraries(IResolvable OR java.util.List<ClusterPolicyLibraries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>>

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLibraries` <a name="resetLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries"></a>

```java
public void resetLibraries()
```

##### `resetMaxClustersPerUser` <a name="resetMaxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser"></a>

```java
public void resetMaxClustersPerUser()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetName"></a>

```java
public void resetName()
```

##### `resetPolicyFamilyDefinitionOverrides` <a name="resetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```java
public void resetPolicyFamilyDefinitionOverrides()
```

##### `resetPolicyFamilyId` <a name="resetPolicyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId"></a>

```java
public void resetPolicyFamilyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicy;

ClusterPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicy;

ClusterPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicy;

ClusterPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicy;

ClusterPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClusterPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClusterPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries">libraries</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput">librariesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput">maxClustersPerUserInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput">policyFamilyDefinitionOverridesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput">policyFamilyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries"></a>

```java
public ClusterPolicyLibrariesList getLibraries();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `librariesInput`<sup>Optional</sup> <a name="librariesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput"></a>

```java
public java.lang.Object getLibrariesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>>

---

##### `maxClustersPerUserInput`<sup>Optional</sup> <a name="maxClustersPerUserInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput"></a>

```java
public java.lang.Number getMaxClustersPerUserInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="policyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverridesInput();
```

- *Type:* java.lang.String

---

##### `policyFamilyIdInput`<sup>Optional</sup> <a name="policyFamilyIdInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput"></a>

```java
public java.lang.String getPolicyFamilyIdInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxClustersPerUser`<sup>Required</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser"></a>

```java
public java.lang.Number getMaxClustersPerUser();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyFamilyDefinitionOverrides`<sup>Required</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverrides();
```

- *Type:* java.lang.String

---

##### `policyFamilyId`<sup>Required</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId"></a>

```java
public java.lang.String getPolicyFamilyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterPolicyConfig <a name="ClusterPolicyConfig" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyConfig;

ClusterPolicyConfig.builder()
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
//  .libraries(IResolvable)
//  .libraries(java.util.List<ClusterPolicyLibraries>)
//  .maxClustersPerUser(java.lang.Number)
//  .name(java.lang.String)
//  .policyFamilyDefinitionOverrides(java.lang.String)
//  .policyFamilyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#description ClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#id ClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries">libraries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>></code> | libraries block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#name ClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId">policyFamilyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#description ClusterPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#id ClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries"></a>

```java
public java.lang.Object getLibraries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>>

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}

---

##### `maxClustersPerUser`<sup>Optional</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser"></a>

```java
public java.lang.Number getMaxClustersPerUser();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#name ClusterPolicy#name}.

---

##### `policyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```java
public java.lang.String getPolicyFamilyDefinitionOverrides();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}.

---

##### `policyFamilyId`<sup>Optional</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId"></a>

```java
public java.lang.String getPolicyFamilyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}.

---

### ClusterPolicyLibraries <a name="ClusterPolicyLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibraries;

ClusterPolicyLibraries.builder()
//  .cran(ClusterPolicyLibrariesCran)
//  .egg(java.lang.String)
//  .jar(java.lang.String)
//  .maven(ClusterPolicyLibrariesMaven)
//  .pypi(ClusterPolicyLibrariesPypi)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}. |

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran"></a>

```java
public ClusterPolicyLibrariesCran getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#cran ClusterPolicy#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven"></a>

```java
public ClusterPolicyLibrariesMaven getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#maven ClusterPolicy#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi"></a>

```java
public ClusterPolicyLibrariesPypi getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#pypi ClusterPolicy#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}.

---

### ClusterPolicyLibrariesCran <a name="ClusterPolicyLibrariesCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesCran;

ClusterPolicyLibrariesCran.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesMaven <a name="ClusterPolicyLibrariesMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesMaven;

ClusterPolicyLibrariesMaven.builder()
    .coordinates(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesPypi <a name="ClusterPolicyLibrariesPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesPypi;

ClusterPolicyLibrariesPypi.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterPolicyLibrariesCranOutputReference <a name="ClusterPolicyLibrariesCranOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesCranOutputReference;

new ClusterPolicyLibrariesCranOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue"></a>

```java
public ClusterPolicyLibrariesCran getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---


### ClusterPolicyLibrariesList <a name="ClusterPolicyLibrariesList" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesList;

new ClusterPolicyLibrariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get"></a>

```java
public ClusterPolicyLibrariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>>

---


### ClusterPolicyLibrariesMavenOutputReference <a name="ClusterPolicyLibrariesMavenOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesMavenOutputReference;

new ClusterPolicyLibrariesMavenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput"></a>

```java
public java.lang.String getCoordinatesInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue"></a>

```java
public ClusterPolicyLibrariesMaven getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---


### ClusterPolicyLibrariesOutputReference <a name="ClusterPolicyLibrariesOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesOutputReference;

new ClusterPolicyLibrariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran"></a>

```java
public void putCran(ClusterPolicyLibrariesCran value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven"></a>

```java
public void putMaven(ClusterPolicyLibrariesMaven value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi"></a>

```java
public void putPypi(ClusterPolicyLibrariesPypi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran"></a>

```java
public void resetCran()
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg"></a>

```java
public void resetEgg()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar"></a>

```java
public void resetJar()
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven"></a>

```java
public void resetMaven()
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi"></a>

```java
public void resetPypi()
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements"></a>

```java
public void resetRequirements()
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl"></a>

```java
public void resetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput">cranInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput">eggInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput">pypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput">requirementsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput">whlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg">egg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements">requirements</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl">whl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran"></a>

```java
public ClusterPolicyLibrariesCranOutputReference getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven"></a>

```java
public ClusterPolicyLibrariesMavenOutputReference getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi"></a>

```java
public ClusterPolicyLibrariesPypiOutputReference getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a>

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput"></a>

```java
public ClusterPolicyLibrariesCran getCranInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput"></a>

```java
public java.lang.String getEggInput();
```

- *Type:* java.lang.String

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput"></a>

```java
public ClusterPolicyLibrariesMaven getMavenInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput"></a>

```java
public ClusterPolicyLibrariesPypi getPypiInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput"></a>

```java
public java.lang.String getRequirementsInput();
```

- *Type:* java.lang.String

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput"></a>

```java
public java.lang.String getWhlInput();
```

- *Type:* java.lang.String

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>

---


### ClusterPolicyLibrariesPypiOutputReference <a name="ClusterPolicyLibrariesPypiOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster_policy.ClusterPolicyLibrariesPypiOutputReference;

new ClusterPolicyLibrariesPypiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue"></a>

```java
public ClusterPolicyLibrariesPypi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---



