# `query` Submodule <a name="`query` Submodule" id="@cdktf/provider-databricks.query"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Query <a name="Query" id="@cdktf/provider-databricks.query.Query"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query databricks_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.Query.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.Query;

Query.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .queryText(java.lang.String)
    .warehouseId(java.lang.String)
//  .applyAutoLimit(java.lang.Boolean|IResolvable)
//  .catalog(java.lang.String)
//  .description(java.lang.String)
//  .ownerUserName(java.lang.String)
//  .parameter(IResolvable|java.util.List<QueryParameter>)
//  .parentPath(java.lang.String)
//  .runAsMode(java.lang.String)
//  .schema(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.queryText">queryText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.applyAutoLimit">applyAutoLimit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.parentPath">parentPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.runAsMode">runAsMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#tags Query#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#display_name Query#display_name}.

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.queryText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_text Query#query_text}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.warehouseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `applyAutoLimit`<sup>Optional</sup> <a name="applyAutoLimit" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.applyAutoLimit"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#catalog Query#catalog}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#description Query#description}.

---

##### `ownerUserName`<sup>Optional</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.ownerUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.parameter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parameter Query#parameter}

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.parentPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `runAsMode`<sup>Optional</sup> <a name="runAsMode" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.runAsMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#schema Query#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#tags Query#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.query.Query.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.query.Query.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.query.Query.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetApplyAutoLimit">resetApplyAutoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOwnerUserName">resetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetRunAsMode">resetRunAsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.Query.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.query.Query.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.query.Query.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.query.Query.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.query.Query.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.query.Query.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.query.Query.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.query.Query.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.query.Query.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.query.Query.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.query.Query.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-databricks.query.Query.putParameter"></a>

```java
public void putParameter(IResolvable|java.util.List<QueryParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>>

---

##### `resetApplyAutoLimit` <a name="resetApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.resetApplyAutoLimit"></a>

```java
public void resetApplyAutoLimit()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-databricks.query.Query.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.query.Query.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOwnerUserName` <a name="resetOwnerUserName" id="@cdktf/provider-databricks.query.Query.resetOwnerUserName"></a>

```java
public void resetOwnerUserName()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-databricks.query.Query.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktf/provider-databricks.query.Query.resetParentPath"></a>

```java
public void resetParentPath()
```

##### `resetRunAsMode` <a name="resetRunAsMode" id="@cdktf/provider-databricks.query.Query.resetRunAsMode"></a>

```java
public void resetRunAsMode()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-databricks.query.Query.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.query.Query.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.query.Query.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.Query;

Query.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.query.Query.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.Query;

Query.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.query.Query.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.Query;

Query.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.query.Query.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.Query;

Query.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Query.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Query to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Query that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Query to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lastModifierUserName">lastModifierUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput">applyAutoLimitInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserNameInput">ownerUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPathInput">parentPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryTextInput">queryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsModeInput">runAsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimit">applyAutoLimit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsMode">runAsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.query.Query.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.query.Query.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.Query.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.query.Query.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.query.Query.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.query.Query.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.Query.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.Query.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.query.Query.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.query.Query.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.Query.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.Query.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.query.Query.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifierUserName`<sup>Required</sup> <a name="lastModifierUserName" id="@cdktf/provider-databricks.query.Query.property.lastModifierUserName"></a>

```java
public java.lang.String getLastModifierUserName();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.query.Query.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.query.Query.property.parameter"></a>

```java
public QueryParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.query.Query.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `applyAutoLimitInput`<sup>Optional</sup> <a name="applyAutoLimitInput" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyAutoLimitInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-databricks.query.Query.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.query.Query.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.query.Query.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `ownerUserNameInput`<sup>Optional</sup> <a name="ownerUserNameInput" id="@cdktf/provider-databricks.query.Query.property.ownerUserNameInput"></a>

```java
public java.lang.String getOwnerUserNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-databricks.query.Query.property.parameterInput"></a>

```java
public IResolvable|java.util.List<QueryParameter> getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>>

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.query.Query.property.parentPathInput"></a>

```java
public java.lang.String getParentPathInput();
```

- *Type:* java.lang.String

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="@cdktf/provider-databricks.query.Query.property.queryTextInput"></a>

```java
public java.lang.String getQueryTextInput();
```

- *Type:* java.lang.String

---

##### `runAsModeInput`<sup>Optional</sup> <a name="runAsModeInput" id="@cdktf/provider-databricks.query.Query.property.runAsModeInput"></a>

```java
public java.lang.String getRunAsModeInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-databricks.query.Query.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.query.Query.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.query.Query.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `applyAutoLimit`<sup>Required</sup> <a name="applyAutoLimit" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimit"></a>

```java
public java.lang.Boolean|IResolvable getApplyAutoLimit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.query.Query.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.query.Query.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.query.Query.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.query.Query.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.query.Query.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.query.Query.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `runAsMode`<sup>Required</sup> <a name="runAsMode" id="@cdktf/provider-databricks.query.Query.property.runAsMode"></a>

```java
public java.lang.String getRunAsMode();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-databricks.query.Query.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.query.Query.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.query.Query.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.query.Query.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QueryConfig <a name="QueryConfig" id="@cdktf/provider-databricks.query.QueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryConfig;

QueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .queryText(java.lang.String)
    .warehouseId(java.lang.String)
//  .applyAutoLimit(java.lang.Boolean|IResolvable)
//  .catalog(java.lang.String)
//  .description(java.lang.String)
//  .ownerUserName(java.lang.String)
//  .parameter(IResolvable|java.util.List<QueryParameter>)
//  .parentPath(java.lang.String)
//  .runAsMode(java.lang.String)
//  .schema(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.queryText">queryText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit">applyAutoLimit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.runAsMode">runAsMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#tags Query#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.QueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.QueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.query.QueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.query.QueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.QueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.QueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.QueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.query.QueryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#display_name Query#display_name}.

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.query.QueryConfig.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_text Query#query_text}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.query.QueryConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `applyAutoLimit`<sup>Optional</sup> <a name="applyAutoLimit" id="@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit"></a>

```java
public java.lang.Boolean|IResolvable getApplyAutoLimit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.query.QueryConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#catalog Query#catalog}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.query.QueryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#description Query#description}.

---

##### `ownerUserName`<sup>Optional</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.query.QueryConfig.property.parameter"></a>

```java
public IResolvable|java.util.List<QueryParameter> getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parameter Query#parameter}

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.query.QueryConfig.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `runAsMode`<sup>Optional</sup> <a name="runAsMode" id="@cdktf/provider-databricks.query.QueryConfig.property.runAsMode"></a>

```java
public java.lang.String getRunAsMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.query.QueryConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#schema Query#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.query.QueryConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#tags Query#tags}.

---

### QueryParameter <a name="QueryParameter" id="@cdktf/provider-databricks.query.QueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameter;

QueryParameter.builder()
    .name(java.lang.String)
//  .dateRangeValue(QueryParameterDateRangeValue)
//  .dateValue(QueryParameterDateValue)
//  .enumValue(QueryParameterEnumValue)
//  .numericValue(QueryParameterNumericValue)
//  .queryBackedValue(QueryParameterQueryBackedValue)
//  .textValue(QueryParameterTextValue)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#name Query#name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateValue">dateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | date_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.enumValue">enumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | enum_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.numericValue">numericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | numeric_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue">queryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | query_backed_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.textValue">textValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | text_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#title Query#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#name Query#name}.

---

##### `dateRangeValue`<sup>Optional</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue"></a>

```java
public QueryParameterDateRangeValue getDateRangeValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateValue"></a>

```java
public QueryParameterDateValue getDateValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

date_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#date_value Query#date_value}

---

##### `enumValue`<sup>Optional</sup> <a name="enumValue" id="@cdktf/provider-databricks.query.QueryParameter.property.enumValue"></a>

```java
public QueryParameterEnumValue getEnumValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

enum_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#enum_value Query#enum_value}

---

##### `numericValue`<sup>Optional</sup> <a name="numericValue" id="@cdktf/provider-databricks.query.QueryParameter.property.numericValue"></a>

```java
public QueryParameterNumericValue getNumericValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

numeric_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#numeric_value Query#numeric_value}

---

##### `queryBackedValue`<sup>Optional</sup> <a name="queryBackedValue" id="@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue"></a>

```java
public QueryParameterQueryBackedValue getQueryBackedValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

query_backed_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_backed_value Query#query_backed_value}

---

##### `textValue`<sup>Optional</sup> <a name="textValue" id="@cdktf/provider-databricks.query.QueryParameter.property.textValue"></a>

```java
public QueryParameterTextValue getTextValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

text_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#text_value Query#text_value}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameter.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#title Query#title}.

---

### QueryParameterDateRangeValue <a name="QueryParameterDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateRangeValue;

QueryParameterDateRangeValue.builder()
//  .dateRangeValue(QueryParameterDateRangeValueDateRangeValue)
//  .dynamicDateRangeValue(java.lang.String)
//  .precision(java.lang.String)
//  .startDayOfWeek(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue">dynamicDateRangeValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision">precision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#precision Query#precision}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek">startDayOfWeek</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#start_day_of_week Query#start_day_of_week}. |

---

##### `dateRangeValue`<sup>Optional</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue"></a>

```java
public QueryParameterDateRangeValueDateRangeValue getDateRangeValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `dynamicDateRangeValue`<sup>Optional</sup> <a name="dynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue"></a>

```java
public java.lang.String getDynamicDateRangeValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision"></a>

```java
public java.lang.String getPrecision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#precision Query#precision}.

---

##### `startDayOfWeek`<sup>Optional</sup> <a name="startDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek"></a>

```java
public java.lang.Number getStartDayOfWeek();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

### QueryParameterDateRangeValueDateRangeValue <a name="QueryParameterDateRangeValueDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateRangeValueDateRangeValue;

QueryParameterDateRangeValueDateRangeValue.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#end Query#end}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#start Query#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#end Query#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#start Query#start}.

---

### QueryParameterDateValue <a name="QueryParameterDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateValue;

QueryParameterDateValue.builder()
//  .dateValue(java.lang.String)
//  .dynamicDateValue(java.lang.String)
//  .precision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#date_value Query#date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue">dynamicDateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision">precision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#precision Query#precision}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#date_value Query#date_value}.

---

##### `dynamicDateValue`<sup>Optional</sup> <a name="dynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue"></a>

```java
public java.lang.String getDynamicDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision"></a>

```java
public java.lang.String getPrecision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#precision Query#precision}.

---

### QueryParameterEnumValue <a name="QueryParameterEnumValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterEnumValue;

QueryParameterEnumValue.builder()
//  .enumOptions(java.lang.String)
//  .multiValuesOptions(QueryParameterEnumValueMultiValuesOptions)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions">enumOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#enum_options Query#enum_options}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#values Query#values}. |

---

##### `enumOptions`<sup>Optional</sup> <a name="enumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions"></a>

```java
public java.lang.String getEnumOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#enum_options Query#enum_options}.

---

##### `multiValuesOptions`<sup>Optional</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions"></a>

```java
public QueryParameterEnumValueMultiValuesOptions getMultiValuesOptions();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#values Query#values}.

---

### QueryParameterEnumValueMultiValuesOptions <a name="QueryParameterEnumValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterEnumValueMultiValuesOptions;

QueryParameterEnumValueMultiValuesOptions.builder()
//  .prefix(java.lang.String)
//  .separator(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator">separator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterNumericValue <a name="QueryParameterNumericValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterNumericValue;

QueryParameterNumericValue.builder()
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#value Query#value}.

---

### QueryParameterQueryBackedValue <a name="QueryParameterQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterQueryBackedValue;

QueryParameterQueryBackedValue.builder()
    .queryId(java.lang.String)
//  .multiValuesOptions(QueryParameterQueryBackedValueMultiValuesOptions)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId">queryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_id Query#query_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#values Query#values}. |

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#query_id Query#query_id}.

---

##### `multiValuesOptions`<sup>Optional</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions"></a>

```java
public QueryParameterQueryBackedValueMultiValuesOptions getMultiValuesOptions();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#values Query#values}.

---

### QueryParameterQueryBackedValueMultiValuesOptions <a name="QueryParameterQueryBackedValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterQueryBackedValueMultiValuesOptions;

QueryParameterQueryBackedValueMultiValuesOptions.builder()
//  .prefix(java.lang.String)
//  .separator(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator">separator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterTextValue <a name="QueryParameterTextValue" id="@cdktf/provider-databricks.query.QueryParameterTextValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterTextValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterTextValue;

QueryParameterTextValue.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/query#value Query#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QueryParameterDateRangeValueDateRangeValueOutputReference <a name="QueryParameterDateRangeValueDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference;

new QueryParameterDateRangeValueDateRangeValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue"></a>

```java
public QueryParameterDateRangeValueDateRangeValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---


### QueryParameterDateRangeValueOutputReference <a name="QueryParameterDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateRangeValueOutputReference;

new QueryParameterDateRangeValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue">putDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue">resetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue">resetDynamicDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision">resetPrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek">resetStartDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRangeValue` <a name="putDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue"></a>

```java
public void putDateRangeValue(QueryParameterDateRangeValueDateRangeValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `resetDateRangeValue` <a name="resetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue"></a>

```java
public void resetDateRangeValue()
```

##### `resetDynamicDateRangeValue` <a name="resetDynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue"></a>

```java
public void resetDynamicDateRangeValue()
```

##### `resetPrecision` <a name="resetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision"></a>

```java
public void resetPrecision()
```

##### `resetStartDayOfWeek` <a name="resetStartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek"></a>

```java
public void resetStartDayOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput">dateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput">dynamicDateRangeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput">precisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput">startDayOfWeekInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue">dynamicDateRangeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision">precision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek">startDayOfWeek</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateRangeValue`<sup>Required</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue"></a>

```java
public QueryParameterDateRangeValueDateRangeValueOutputReference getDateRangeValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a>

---

##### `dateRangeValueInput`<sup>Optional</sup> <a name="dateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput"></a>

```java
public QueryParameterDateRangeValueDateRangeValue getDateRangeValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `dynamicDateRangeValueInput`<sup>Optional</sup> <a name="dynamicDateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput"></a>

```java
public java.lang.String getDynamicDateRangeValueInput();
```

- *Type:* java.lang.String

---

##### `precisionInput`<sup>Optional</sup> <a name="precisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput"></a>

```java
public java.lang.String getPrecisionInput();
```

- *Type:* java.lang.String

---

##### `startDayOfWeekInput`<sup>Optional</sup> <a name="startDayOfWeekInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput"></a>

```java
public java.lang.Number getStartDayOfWeekInput();
```

- *Type:* java.lang.Number

---

##### `dynamicDateRangeValue`<sup>Required</sup> <a name="dynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue"></a>

```java
public java.lang.String getDynamicDateRangeValue();
```

- *Type:* java.lang.String

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision"></a>

```java
public java.lang.String getPrecision();
```

- *Type:* java.lang.String

---

##### `startDayOfWeek`<sup>Required</sup> <a name="startDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek"></a>

```java
public java.lang.Number getStartDayOfWeek();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue"></a>

```java
public QueryParameterDateRangeValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---


### QueryParameterDateValueOutputReference <a name="QueryParameterDateValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterDateValueOutputReference;

new QueryParameterDateValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue">resetDynamicDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision">resetPrecision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetDynamicDateValue` <a name="resetDynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue"></a>

```java
public void resetDynamicDateValue()
```

##### `resetPrecision` <a name="resetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision"></a>

```java
public void resetPrecision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput">dynamicDateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput">precisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue">dynamicDateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision">precision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput"></a>

```java
public java.lang.String getDateValueInput();
```

- *Type:* java.lang.String

---

##### `dynamicDateValueInput`<sup>Optional</sup> <a name="dynamicDateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput"></a>

```java
public java.lang.String getDynamicDateValueInput();
```

- *Type:* java.lang.String

---

##### `precisionInput`<sup>Optional</sup> <a name="precisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput"></a>

```java
public java.lang.String getPrecisionInput();
```

- *Type:* java.lang.String

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

---

##### `dynamicDateValue`<sup>Required</sup> <a name="dynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue"></a>

```java
public java.lang.String getDynamicDateValue();
```

- *Type:* java.lang.String

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision"></a>

```java
public java.lang.String getPrecision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue"></a>

```java
public QueryParameterDateValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---


### QueryParameterEnumValueMultiValuesOptionsOutputReference <a name="QueryParameterEnumValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference;

new QueryParameterEnumValueMultiValuesOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```java
public void resetSeparator()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput">separatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```java
public java.lang.String getSeparatorInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```java
public QueryParameterEnumValueMultiValuesOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---


### QueryParameterEnumValueOutputReference <a name="QueryParameterEnumValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterEnumValueOutputReference;

new QueryParameterEnumValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions">putMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions">resetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions">resetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiValuesOptions` <a name="putMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions"></a>

```java
public void putMultiValuesOptions(QueryParameterEnumValueMultiValuesOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `resetEnumOptions` <a name="resetEnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions"></a>

```java
public void resetEnumOptions()
```

##### `resetMultiValuesOptions` <a name="resetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions"></a>

```java
public void resetMultiValuesOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput">enumOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput">multiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions">enumOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiValuesOptions`<sup>Required</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions"></a>

```java
public QueryParameterEnumValueMultiValuesOptionsOutputReference getMultiValuesOptions();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a>

---

##### `enumOptionsInput`<sup>Optional</sup> <a name="enumOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput"></a>

```java
public java.lang.String getEnumOptionsInput();
```

- *Type:* java.lang.String

---

##### `multiValuesOptionsInput`<sup>Optional</sup> <a name="multiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput"></a>

```java
public QueryParameterEnumValueMultiValuesOptions getMultiValuesOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enumOptions`<sup>Required</sup> <a name="enumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions"></a>

```java
public java.lang.String getEnumOptions();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue"></a>

```java
public QueryParameterEnumValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---


### QueryParameterList <a name="QueryParameterList" id="@cdktf/provider-databricks.query.QueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterList;

new QueryParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.query.QueryParameterList.get"></a>

```java
public QueryParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.query.QueryParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QueryParameter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>>

---


### QueryParameterNumericValueOutputReference <a name="QueryParameterNumericValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterNumericValueOutputReference;

new QueryParameterNumericValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue"></a>

```java
public QueryParameterNumericValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---


### QueryParameterOutputReference <a name="QueryParameterOutputReference" id="@cdktf/provider-databricks.query.QueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterOutputReference;

new QueryParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue">putDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue">putDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue">putEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue">putNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue">putQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue">putTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue">resetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue">resetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue">resetNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue">resetQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue">resetTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRangeValue` <a name="putDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue"></a>

```java
public void putDateRangeValue(QueryParameterDateRangeValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `putDateValue` <a name="putDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue"></a>

```java
public void putDateValue(QueryParameterDateValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `putEnumValue` <a name="putEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue"></a>

```java
public void putEnumValue(QueryParameterEnumValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `putNumericValue` <a name="putNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue"></a>

```java
public void putNumericValue(QueryParameterNumericValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `putQueryBackedValue` <a name="putQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue"></a>

```java
public void putQueryBackedValue(QueryParameterQueryBackedValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `putTextValue` <a name="putTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue"></a>

```java
public void putTextValue(QueryParameterTextValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `resetDateRangeValue` <a name="resetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue"></a>

```java
public void resetDateRangeValue()
```

##### `resetDateValue` <a name="resetDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetEnumValue` <a name="resetEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue"></a>

```java
public void resetEnumValue()
```

##### `resetNumericValue` <a name="resetNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue"></a>

```java
public void resetNumericValue()
```

##### `resetQueryBackedValue` <a name="resetQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue"></a>

```java
public void resetQueryBackedValue()
```

##### `resetTextValue` <a name="resetTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue"></a>

```java
public void resetTextValue()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue">dateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue">enumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue">numericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue">queryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue">textValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput">dateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput">dateValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput">enumValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput">numericValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput">queryBackedValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput">textValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateRangeValue`<sup>Required</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue"></a>

```java
public QueryParameterDateRangeValueOutputReference getDateRangeValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a>

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue"></a>

```java
public QueryParameterDateValueOutputReference getDateValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a>

---

##### `enumValue`<sup>Required</sup> <a name="enumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue"></a>

```java
public QueryParameterEnumValueOutputReference getEnumValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a>

---

##### `numericValue`<sup>Required</sup> <a name="numericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue"></a>

```java
public QueryParameterNumericValueOutputReference getNumericValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a>

---

##### `queryBackedValue`<sup>Required</sup> <a name="queryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue"></a>

```java
public QueryParameterQueryBackedValueOutputReference getQueryBackedValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a>

---

##### `textValue`<sup>Required</sup> <a name="textValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue"></a>

```java
public QueryParameterTextValueOutputReference getTextValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a>

---

##### `dateRangeValueInput`<sup>Optional</sup> <a name="dateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput"></a>

```java
public QueryParameterDateRangeValue getDateRangeValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput"></a>

```java
public QueryParameterDateValue getDateValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `enumValueInput`<sup>Optional</sup> <a name="enumValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput"></a>

```java
public QueryParameterEnumValue getEnumValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numericValueInput`<sup>Optional</sup> <a name="numericValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput"></a>

```java
public QueryParameterNumericValue getNumericValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `queryBackedValueInput`<sup>Optional</sup> <a name="queryBackedValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput"></a>

```java
public QueryParameterQueryBackedValue getQueryBackedValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `textValueInput`<sup>Optional</sup> <a name="textValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput"></a>

```java
public QueryParameterTextValue getTextValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|QueryParameter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>

---


### QueryParameterQueryBackedValueMultiValuesOptionsOutputReference <a name="QueryParameterQueryBackedValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference;

new QueryParameterQueryBackedValueMultiValuesOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```java
public void resetSeparator()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput">separatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```java
public java.lang.String getSeparatorInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```java
public QueryParameterQueryBackedValueMultiValuesOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---


### QueryParameterQueryBackedValueOutputReference <a name="QueryParameterQueryBackedValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterQueryBackedValueOutputReference;

new QueryParameterQueryBackedValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions">putMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions">resetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiValuesOptions` <a name="putMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions"></a>

```java
public void putMultiValuesOptions(QueryParameterQueryBackedValueMultiValuesOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `resetMultiValuesOptions` <a name="resetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions"></a>

```java
public void resetMultiValuesOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput">multiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput">queryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId">queryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiValuesOptions`<sup>Required</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions"></a>

```java
public QueryParameterQueryBackedValueMultiValuesOptionsOutputReference getMultiValuesOptions();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a>

---

##### `multiValuesOptionsInput`<sup>Optional</sup> <a name="multiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput"></a>

```java
public QueryParameterQueryBackedValueMultiValuesOptions getMultiValuesOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput"></a>

```java
public java.lang.String getQueryIdInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue"></a>

```java
public QueryParameterQueryBackedValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---


### QueryParameterTextValueOutputReference <a name="QueryParameterTextValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.query.QueryParameterTextValueOutputReference;

new QueryParameterTextValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue"></a>

```java
public QueryParameterTextValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---



