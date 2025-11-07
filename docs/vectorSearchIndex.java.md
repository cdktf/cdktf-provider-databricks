# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktf/provider-databricks.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index databricks_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndex;

VectorSearchIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointName(java.lang.String)
    .indexType(java.lang.String)
    .name(java.lang.String)
    .primaryKey(java.lang.String)
//  .deltaSyncIndexSpec(VectorSearchIndexDeltaSyncIndexSpec)
//  .directAccessIndexSpec(VectorSearchIndexDirectAccessIndexSpec)
//  .id(java.lang.String)
//  .timeouts(VectorSearchIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexType">indexType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | delta_sync_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | direct_access_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}.

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.primaryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}.

---

##### `deltaSyncIndexSpec`<sup>Optional</sup> <a name="deltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.deltaSyncIndexSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

delta_sync_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}

---

##### `directAccessIndexSpec`<sup>Optional</sup> <a name="directAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.directAccessIndexSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

direct_access_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec">putDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec">putDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec">resetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec">resetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeltaSyncIndexSpec` <a name="putDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec"></a>

```java
public void putDeltaSyncIndexSpec(VectorSearchIndexDeltaSyncIndexSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `putDirectAccessIndexSpec` <a name="putDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec"></a>

```java
public void putDirectAccessIndexSpec(VectorSearchIndexDirectAccessIndexSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```java
public void putTimeouts(VectorSearchIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `resetDeltaSyncIndexSpec` <a name="resetDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec"></a>

```java
public void resetDeltaSyncIndexSpec()
```

##### `resetDirectAccessIndexSpec` <a name="resetDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec"></a>

```java
public void resetDirectAccessIndexSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndex;

VectorSearchIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndex;

VectorSearchIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndex;

VectorSearchIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndex;

VectorSearchIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VectorSearchIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status">status</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput">deltaSyncIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput">directAccessIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput">indexTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType">indexType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `deltaSyncIndexSpec`<sup>Required</sup> <a name="deltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpecOutputReference getDeltaSyncIndexSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `directAccessIndexSpec`<sup>Required</sup> <a name="directAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec"></a>

```java
public VectorSearchIndexDirectAccessIndexSpecOutputReference getDirectAccessIndexSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status"></a>

```java
public VectorSearchIndexStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```java
public VectorSearchIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `deltaSyncIndexSpecInput`<sup>Optional</sup> <a name="deltaSyncIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpec getDeltaSyncIndexSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `directAccessIndexSpecInput`<sup>Optional</sup> <a name="directAccessIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput"></a>

```java
public VectorSearchIndexDirectAccessIndexSpec getDirectAccessIndexSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexTypeInput`<sup>Optional</sup> <a name="indexTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput"></a>

```java
public java.lang.String getIndexTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```java
public IResolvable|VectorSearchIndexTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType"></a>

```java
public java.lang.String getIndexType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexConfig;

VectorSearchIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointName(java.lang.String)
    .indexType(java.lang.String)
    .name(java.lang.String)
    .primaryKey(java.lang.String)
//  .deltaSyncIndexSpec(VectorSearchIndexDeltaSyncIndexSpec)
//  .directAccessIndexSpec(VectorSearchIndexDirectAccessIndexSpec)
//  .id(java.lang.String)
//  .timeouts(VectorSearchIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType">indexType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | delta_sync_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | direct_access_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}.

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType"></a>

```java
public java.lang.String getIndexType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}.

---

##### `deltaSyncIndexSpec`<sup>Optional</sup> <a name="deltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpec getDeltaSyncIndexSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

delta_sync_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}

---

##### `directAccessIndexSpec`<sup>Optional</sup> <a name="directAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec"></a>

```java
public VectorSearchIndexDirectAccessIndexSpec getDirectAccessIndexSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

direct_access_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```java
public VectorSearchIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDeltaSyncIndexSpec <a name="VectorSearchIndexDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpec;

VectorSearchIndexDeltaSyncIndexSpec.builder()
//  .embeddingSourceColumns(IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns>)
//  .embeddingVectorColumns(IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns>)
//  .embeddingWritebackTable(java.lang.String)
//  .pipelineType(java.lang.String)
//  .sourceTable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>></code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>></code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable">sourceTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns> getEmbeddingSourceColumns();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>>

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns> getEmbeddingVectorColumns();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>>

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `embeddingWritebackTable`<sup>Optional</sup> <a name="embeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```java
public java.lang.String getEmbeddingWritebackTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```java
public java.lang.String getPipelineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}.

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```java
public java.lang.String getSourceTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns;

VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.builder()
//  .embeddingModelEndpointName(java.lang.String)
//  .modelEndpointNameForQuery(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#model_endpoint_name_for_query VectorSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingModelEndpointName`<sup>Optional</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```java
public java.lang.String getEmbeddingModelEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```java
public java.lang.String getModelEndpointNameForQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#model_endpoint_name_for_query VectorSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns;

VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.builder()
//  .embeddingDimension(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```java
public java.lang.Number getEmbeddingDimension();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpec <a name="VectorSearchIndexDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpec;

VectorSearchIndexDirectAccessIndexSpec.builder()
//  .embeddingSourceColumns(IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns>)
//  .embeddingVectorColumns(IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns>)
//  .schemaJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>></code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>></code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson">schemaJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns> getEmbeddingSourceColumns();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>>

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns> getEmbeddingVectorColumns();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>>

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```java
public java.lang.String getSchemaJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns;

VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.builder()
//  .embeddingModelEndpointName(java.lang.String)
//  .modelEndpointNameForQuery(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#model_endpoint_name_for_query VectorSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingModelEndpointName`<sup>Optional</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```java
public java.lang.String getEmbeddingModelEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```java
public java.lang.String getModelEndpointNameForQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#model_endpoint_name_for_query VectorSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns;

VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.builder()
//  .embeddingDimension(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```java
public java.lang.Number getEmbeddingDimension();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexStatus <a name="VectorSearchIndexStatus" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexStatus;

VectorSearchIndexStatus.builder()
    .build();
```


### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexTimeouts;

VectorSearchIndexTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#create VectorSearchIndex#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>>

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">resetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpointName` <a name="resetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```java
public void resetEmbeddingModelEndpointName()
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```java
public void resetModelEndpointNameForQuery()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">embeddingModelEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingModelEndpointNameInput`<sup>Optional</sup> <a name="embeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```java
public java.lang.String getEmbeddingModelEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```java
public java.lang.String getModelEndpointNameForQueryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `embeddingModelEndpointName`<sup>Required</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```java
public java.lang.String getEmbeddingModelEndpointName();
```

- *Type:* java.lang.String

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```java
public java.lang.String getModelEndpointNameForQuery();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>>

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```java
public void resetEmbeddingDimension()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```java
public java.lang.Number getEmbeddingDimensionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```java
public java.lang.Number getEmbeddingDimension();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### VectorSearchIndexDeltaSyncIndexSpecOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDeltaSyncIndexSpecOutputReference;

new VectorSearchIndexDeltaSyncIndexSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">resetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType">resetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```java
public void putEmbeddingSourceColumns(IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>>

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```java
public void putEmbeddingVectorColumns(IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>>

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```java
public void resetEmbeddingSourceColumns()
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```java
public void resetEmbeddingVectorColumns()
```

##### `resetEmbeddingWritebackTable` <a name="resetEmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```java
public void resetEmbeddingWritebackTable()
```

##### `resetPipelineType` <a name="resetPipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType"></a>

```java
public void resetPipelineType()
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```java
public void resetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embeddingWritebackTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">sourceTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList getEmbeddingSourceColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList getEmbeddingVectorColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns> getEmbeddingSourceColumnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>>

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns> getEmbeddingVectorColumnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>>

---

##### `embeddingWritebackTableInput`<sup>Optional</sup> <a name="embeddingWritebackTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```java
public java.lang.String getEmbeddingWritebackTableInput();
```

- *Type:* java.lang.String

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```java
public java.lang.String getPipelineTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```java
public java.lang.String getSourceTableInput();
```

- *Type:* java.lang.String

---

##### `embeddingWritebackTable`<sup>Required</sup> <a name="embeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```java
public java.lang.String getEmbeddingWritebackTable();
```

- *Type:* java.lang.String

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```java
public java.lang.String getPipelineType();
```

- *Type:* java.lang.String

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```java
public java.lang.String getSourceTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```java
public VectorSearchIndexDeltaSyncIndexSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```java
public VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">resetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpointName` <a name="resetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```java
public void resetEmbeddingModelEndpointName()
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```java
public void resetModelEndpointNameForQuery()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">embeddingModelEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingModelEndpointNameInput`<sup>Optional</sup> <a name="embeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```java
public java.lang.String getEmbeddingModelEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```java
public java.lang.String getModelEndpointNameForQueryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `embeddingModelEndpointName`<sup>Required</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```java
public java.lang.String getEmbeddingModelEndpointName();
```

- *Type:* java.lang.String

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```java
public java.lang.String getModelEndpointNameForQuery();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```java
public VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```java
public void resetEmbeddingDimension()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```java
public java.lang.Number getEmbeddingDimensionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```java
public java.lang.Number getEmbeddingDimension();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### VectorSearchIndexDirectAccessIndexSpecOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexDirectAccessIndexSpecOutputReference;

new VectorSearchIndexDirectAccessIndexSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```java
public void putEmbeddingSourceColumns(IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>>

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```java
public void putEmbeddingVectorColumns(IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>>

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```java
public void resetEmbeddingSourceColumns()
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```java
public void resetEmbeddingVectorColumns()
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```java
public void resetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schemaJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">schemaJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```java
public VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList getEmbeddingSourceColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```java
public VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList getEmbeddingVectorColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns> getEmbeddingSourceColumnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>>

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```java
public IResolvable|java.util.List<VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns> getEmbeddingVectorColumnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>>

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```java
public java.lang.String getSchemaJsonInput();
```

- *Type:* java.lang.String

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```java
public java.lang.String getSchemaJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```java
public VectorSearchIndexDirectAccessIndexSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---


### VectorSearchIndexStatusList <a name="VectorSearchIndexStatusList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexStatusList;

new VectorSearchIndexStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get"></a>

```java
public VectorSearchIndexStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VectorSearchIndexStatusOutputReference <a name="VectorSearchIndexStatusOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexStatusOutputReference;

new VectorSearchIndexStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount">indexedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl">indexUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready">ready</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexedRowCount`<sup>Required</sup> <a name="indexedRowCount" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```java
public java.lang.Number getIndexedRowCount();
```

- *Type:* java.lang.Number

---

##### `indexUrl`<sup>Required</sup> <a name="indexUrl" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl"></a>

```java
public java.lang.String getIndexUrl();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready"></a>

```java
public IResolvable getReady();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue"></a>

```java
public VectorSearchIndexStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.vector_search_index.VectorSearchIndexTimeoutsOutputReference;

new VectorSearchIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchIndexTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---



